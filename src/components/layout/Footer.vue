<template>
	<footer>
		<p class="copyright-notice">Copyright (&copy;) Constantin Metz</p>
	</footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "PortfolioFooter"
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

$footerHeight: 70px;

footer {
	position: relative;
	width: 100%;
	height: $footerHeight;
	font-size: 20px;
	z-index: 20;

	background-color: $accent;
	box-shadow: 0px -5px rgba($color: $accentShadow, $alpha: 1);

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
