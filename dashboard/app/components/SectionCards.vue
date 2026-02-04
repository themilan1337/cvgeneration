<script setup lang="ts">
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-vue"
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
</script>

<template>
  <div class="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
    <Card class="@container/card">
      <CardHeader>
        <CardDescription>Total Resumes</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          12
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingUp />
            +2
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
          New resumes this month <IconTrendingUp class="size-4" />
        </div>
        <div class="text-muted-foreground">
          You have created 12 resumes in total
        </div>
      </CardFooter>
    </Card>
    <Card class="@container/card">
      <CardHeader>
        <CardDescription>Active Portfolios</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          4
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingDown />
            -1
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
          1 portfolio archived recently <IconTrendingDown class="size-4" />
        </div>
        <div class="text-muted-foreground">
          4 portfolios are currently live
        </div>
      </CardFooter>
    </Card>
    <Card class="@container/card">
      <CardHeader>
        <CardDescription>Profile Views</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          4,567
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingUp />
            +18%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
          High engagement on your LinkedIn <IconTrendingUp class="size-4" />
        </div>
        <div class="text-muted-foreground">
          Views for the last 30 days
        </div>
      </CardFooter>
    </Card>
    <Card class="@container/card">
      <CardHeader>
        <CardDescription>AI Score Avg.</CardDescription>
        <CardTitle class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          92%
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingUp />
            +4%
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter class="flex-col items-start gap-1.5 text-sm">
        <div class="line-clamp-1 flex gap-2 font-medium">
          Above average optimization <IconTrendingUp class="size-4" />
        </div>
        <div class="text-muted-foreground">
          Based on recent AI insights
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
