<script setup lang="ts">
import DefaultHeader from "~/components/layout/DefaultHeader.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
	<div>
		<DefaultHeader />
		<div id="main" class="p-8 text-white">
			<div>Error</div>
		</div>
		<Footer />

		<ScrollTop target="window" :buttonProps="{ severity: 'contrast', raised: true, rounded: true }" />
	</div>
</template>

<style scoped>
#main {
	margin-top: 128px;
}

.p-scrolltop {
	position: fixed !important;
}
</style>
