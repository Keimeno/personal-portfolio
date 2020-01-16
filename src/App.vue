<template>
	<div id="app">
		<portfolio-header />
		<keep-alive>
			<router-view />
		</keep-alive>
		<portfolio-footer />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import PortfolioHeader from "@/components/layout/Header.vue";
import PortfolioFooter from "@/components/layout/Footer.vue";

export default Vue.extend({
	name: "app",
	components: {
		PortfolioHeader,
		PortfolioFooter
	},
	metaInfo: {
		titleTemplate: "Portfolio %s"
	}
});
</script>

<style lang="scss">
@import "./scss/globals";
</style>
