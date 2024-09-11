<script setup lang="ts">
import { defineProps } from 'vue'

interface SuspenseWrapper<T extends unknown[]> {
	asyncFn: (...params: T) => Promise<T>
}

const props = defineProps<SuspenseWrapper<any>>();

// Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.Vetur(1378)
await props.asyncFn();
</script>

<template>
	<!-- 	The template root disallows '<slot>' elements.eslint-plugin-vue  -->
	<slot name="wrapper" />
</template>