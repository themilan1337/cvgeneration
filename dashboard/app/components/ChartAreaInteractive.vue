<script setup lang="ts">
import type { ChartConfig } from '@/components/ui/chart'
import { VisArea, VisAxis, VisLine, VisXYContainer } from "@unovis/vue"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartCrosshair,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  componentToString,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const description = "Profile engagement chart"

const chartData = [
  { date: new Date("2024-04-01"), resumes: 120, portfolios: 150 },
  { date: new Date("2024-04-02"), resumes: 97, portfolios: 180 },
  { date: new Date("2024-04-03"), resumes: 167, portfolios: 120 },
  { date: new Date("2024-04-04"), resumes: 242, portfolios: 260 },
  { date: new Date("2024-04-05"), resumes: 373, portfolios: 290 },
  { date: new Date("2024-04-20"), resumes: 89, portfolios: 150 },
  { date: new Date("2024-05-15"), resumes: 473, portfolios: 380 },
  { date: new Date("2024-06-30"), resumes: 446, portfolios: 400 },
]

for (let i = 1; i < 90; i++) {
  const date = new Date("2024-04-01")
  date.setDate(date.getDate() + i)
  if (!chartData.find(d => d.date.getTime() === date.getTime())) {
    chartData.push({
      date,
      resumes: Math.floor(Math.random() * 300) + 100,
      portfolios: Math.floor(Math.random() * 400) + 150
    })
  }
}
chartData.sort((a, b) => a.date.getTime() - b.date.getTime())

type Data = typeof chartData[number]

const chartConfig = {
  resumes: {
    label: "Resumes",
    color: "var(--primary)",
  },
  portfolios: {
    label: "Portfolios",
    color: "var(--primary)",
  },
} satisfies ChartConfig

const svgDefs = `
  <linearGradient id="fillResumes" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stop-color="var(--color-resumes)" stop-opacity="0.8"/>
    <stop offset="95%" stop-color="var(--color-resumes)" stop-opacity="0.1"/>
  </linearGradient>
  <linearGradient id="fillPortfolios" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stop-color="var(--color-portfolios)" stop-opacity="0.8"/>
    <stop offset="95%" stop-color="var(--color-portfolios)" stop-opacity="0.1"/>
  </linearGradient>
`

const timeRange = ref("90d")
const filterRange = computed(() => {
  return chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange.value === "30d") daysToSubtract = 30
    else if (timeRange.value === "7d") daysToSubtract = 7
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })
})
</script>

<template>
  <Card class="pt-0 border-none shadow-none bg-transparent">
    <CardHeader class="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
      <div class="grid flex-1 gap-1">
        <CardTitle>Profile Engagement</CardTitle>
        <CardDescription>
          Showing total views for your portfolios and resumes
        </CardDescription>
      </div>
      <Select v-model="timeRange">
        <SelectTrigger
          class="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
          aria-label="Select a value"
        >
          <SelectValue placeholder="Last 3 months" />
        </SelectTrigger>
        <SelectContent class="rounded-xl">
          <SelectItem value="90d" class="rounded-lg">Last 3 months</SelectItem>
          <SelectItem value="30d" class="rounded-lg">Last 30 days</SelectItem>
          <SelectItem value="7d" class="rounded-lg">Last 7 days</SelectItem>
        </SelectContent>
      </Select>
    </CardHeader>
    <CardContent class="px-2 pt-4 sm:px-6 sm:pt-6 pb-4">
      <ChartContainer :config="chartConfig" class="aspect-auto h-[250px] w-full" :cursor="false">
        <VisXYContainer
          :data="filterRange"
          :svg-defs="svgDefs"
          :margin="{ left: -40 }"
        >
          <VisArea
            :x="(d: Data) => d.date"
            :y="[(d: Data) => d.resumes, (d: Data) => d.portfolios]"
            :color="(d: Data, i: number) => ['url(#fillResumes)', 'url(#fillPortfolios)'][i]"
            :opacity="0.6"
          />
          <VisLine
            :x="(d: Data) => d.date"
            :y="[(d: Data) => d.resumes, (d: Data) => d.resumes + d.portfolios]"
            :color="(d: Data, i: number) => [chartConfig.resumes.color, chartConfig.portfolios.color][i]"
            :line-width="2"
          />
          <VisAxis
            type="x"
            :x="(d: Data) => d.date"
            :tick-line="false"
            :domain-line="false"
            :grid-line="false"
            :num-ticks="6"
            :tick-format="(d: number) => {
              const date = new Date(d)
              return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })
            }"
          />
          <ChartTooltip />
          <ChartCrosshair
            :template="componentToString(chartConfig, ChartTooltipContent, {
              labelFormatter: (d) => {
                return new Date(d).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })
              },
            })"
            :color="(d: Data, i: number) => [chartConfig.resumes.color, chartConfig.portfolios.color][i % 2]"
          />
        </VisXYContainer>
        <ChartLegendContent />
      </ChartContainer>
    </CardContent>
  </Card>
</template>
