<template>
  <div class="my-element">
    <div ref="mainRef">Loading chart...</div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue"
import Highcharts from "highcharts"

const props = defineProps({
  content: { type: Object, required: true },
})

const mainRef = ref(null)

/**
 * @type {{ value: Highcharts.Chart|null }}
 */
const chart = ref(null)
onMounted(() => {
  console.log("mainRef.value :", mainRef.value)
  chart.value = Highcharts.chart(mainRef.value, {
    chart: {
      type: "bar",
    },
    title: {
      text: props.content.title,
    },
    subtitle: {
      text: props.content.subtitle,
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
      },
    ],
  })
})

const chartTitle = computed(() => props.content.title)
watch(chartTitle, (newVal) => {
  chart.value?.title.update({ text: newVal })
})

const chartSubtitle = computed(() => props.content.subtitle)
watch(chartSubtitle, (newVal) => {
  chart.value?.subtitle.update({ text: newVal })
})
</script>
