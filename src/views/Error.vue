<template>
	<div class="error view">
		<div class="container">
			<p class="title">Oops..</p>
			<p class="description">There has been an error.</p>
			<br />
			<p class="description">{{ error.replace(/_/g, ' ') }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Error",
	computed: {
		error(): string {
			return this.$route.params.message;
		}
	}
});
</script>

<style lang="scss" scoped>
.error {
	height: calc(100vh - 70px);
	display: flex;
	justify-content: center;
	align-items: center;

	.title {
		font-size: 28px;
	}
}
</style>
