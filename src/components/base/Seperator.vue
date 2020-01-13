<template>
	<div
		class="seperator"
		:style="{ 
			marginTop: marginTop + 'px', 
			marginBottom: marginBottom + 'px' 
		}"
	></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "PortfolioSeperator",
	props: {
		marginTop: {
			type: String,
			default: "10"
		},
		marginBottom: {
			type: String,
			default: "30"
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
.seperator {
	width: 250px;
	height: 3px;
	background-color: $accentShadow;
}

@media screen and (max-width: $mobileBreakpoint) {
	.seperator {
		width: 100%;
	}
}
</style>
