<template>
	<div class="btn">
		<p class="btn__content" v-text="text"></p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "PortfolioButton",
	props: {
		text: {
			type: String,
			default: "Submit"
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.btn {
	cursor: pointer;
	background: $accent;
	padding: 4px 10px;
	border-radius: 5px;
	box-shadow: 0px 3px rgba($color: $accentShadow, $alpha: 1);
	font-size: 16px;
	color: black;

	transition: box-shadow 0.15s ease-in, transform 0.15s ease-in-out;

	&:hover {
		box-shadow: 0px 5px rgba($color: $accentShadow, $alpha: 1);
		transform: translateY(-2px);
	}

	&:active {
		transform: translateY(-3px);
		box-shadow: 0px 3px rgba($color: $accentShadow, $alpha: 0.4);
	}
}
</style>
