<script setup lang="ts">
import { defineProps } from 'vue'

interface SuspenseWrapper {
  asyncFn: (...params: unknown[]) => Promise<unknown> | Promise<void>
}

const props = defineProps<SuspenseWrapper>()

await props.asyncFn()
</script>

<template>
  <div>
    <slot name="wrapper" />
  </div>
</template>
