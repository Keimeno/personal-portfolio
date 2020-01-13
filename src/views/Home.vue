<template>
	<div class="home view">
		<div class="container">
			<section>
				<h3 class="section__header">Links</h3>
				<portfolio-links />
			</section>
			<section>
				<h3 class="section__header">My Projects</h3>
				<div class="projects grid">
					<div
						@click="openInternalLinkByName('projects', {id: project.to})"
						v-for="(project, index) in projects"
						:key="index"
					>
						<img
							v-if="project.hasImage"
							:src="require(`@/assets/projects/${project.image}.png`)"
							alt="Neojax Image"
						/>
						<p v-else>{{ project.displayName }}</p>
					</div>
				</div>
			</section>
			<section>
				<h3 class="section__header">Open Source Contributions</h3>
				<div class="open-source grid">
					<div
						@click="openInternalLinkByName('open-source', {id: openSource.to})"
						v-for="(openSource, index) in openSource"
						:key="index"
					>
						<img
							v-if="openSource.hasImage"
							:src="require(`@/assets/open-source/${openSource.image}.png`)"
							alt="Neojax Image"
						/>
						<p v-else>{{ openSource.displayName }}</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import PortfolioLinks from "@/components/base/Links.vue";
import linkMixins from "@/mixins/link.mixin";
import {
	GET_PROJECTS_LIST,
	GET_OPEN_SOURCE_LIST
} from "../store/types/getters.type";
import TList from "../types/ListType";

export default Vue.extend({
	name: "Home",
	components: {
		PortfolioLinks
	},
	mixins: [linkMixins],
	methods: {
		...mapGetters([GET_PROJECTS_LIST, GET_OPEN_SOURCE_LIST])
	},
	computed: {
		projects(): TList {
			return this[GET_PROJECTS_LIST]();
		},
		openSource(): TList {
			return this[GET_OPEN_SOURCE_LIST]();
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.home {
	section {
		margin-bottom: 30px;

		.section__header {
			font-weight: normal;
			font-size: 22px;
			margin-bottom: 6px;
		}

		.grid {
			width: 100%;
			column-width: 50%;
			column-count: 2;
			column-gap: 6px;
			padding: 5px;
			break-inside: avoid;

			div {
				user-select: none;
				cursor: pointer;
				break-inside: avoid-column;
				border: 1px solid black;
				border-radius: 5px;
				margin-bottom: 10px;
				background: white;
				transform: translateZ(0);

				// need to set the box shadow to this initially, as css columns cuts off the upper rights border
				box-shadow: 0px 3px 0px 0px rgba($color: #000000, $alpha: 0);

				transition: all 0.15s;

				&:hover {
					transform: translateY(-3px);
					box-shadow: 0px 3px rgba($color: #000000, $alpha: 0.5);
				}

				img {
					padding: 5px;
					width: 100%;
					height: auto;
				}

				p {
					display: flex;
					justify-content: center;
					align-items: center;

					width: 100%;
					height: 60px;
					font-size: 20px;
				}
			}
		}
	}
}
</style>
