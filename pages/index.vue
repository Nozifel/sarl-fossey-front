<script setup lang="ts">
const { data: page } = await useAsyncData(() => queryCollection("content").path("/").first());

useSeoMeta({
	title: page.value?.title,
	description: page.value?.description,
});
</script>

<template>
	<template v-if="page">
		<ContentRenderer :value="page" />
	</template>
	<template v-else>
		<div class="empty-page">
			<h1>Page Not Found</h1>
			<p>Oops! The content you're looking for doesn't exist.</p>
			<NuxtLink to="/">Go back home</NuxtLink>
		</div>
	</template>
</template>
