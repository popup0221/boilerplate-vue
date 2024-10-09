<script setup lang="ts">
import { Suspense } from 'vue'
</script>

<template>
  <Suspense>
    <template #default>
      <slot name="default-slot" />
    </template>

    <template #fallback>
      <slot name="fallback-slot">
        <!-- receive skeleton comp -->
      </slot>
    </template>
  </Suspense>
</template>
