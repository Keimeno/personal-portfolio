<template>
	<div class="projects view">
		<div class="container">
			<div class="content" v-if="JSON.stringify(project) !== '{}'">
				<section>
					<h3 class="title">{{ metaInfo.displayName }}</h3>
					<p class="description">{{ project.description }}</p>
					<portfolio-seperator />
				</section>
				<section>
					<h3 class="title">Background</h3>
					<p class="description" v-html="project.background.replace(/\n/g, '<br/>')"></p>
					<portfolio-seperator />
				</section>
				<section class="btn-group">
					<portfolio-button
						v-show="project.hasLivePreview"
						@click.native="openExternalLink(project.livePreview)"
						text="Live Preview"
					/>
					<portfolio-button
						v-show="project.hasSourceCode"
						@click.native="openExternalLink(project.sourceCode)"
						text="Source Code"
					/>
				</section>
				<section class="screenshots" v-show="project.screenshots.length">
					<div
						v-show="index < 1 || viewMore"
						class="screenshot"
						v-for="(screenshot, index) in project.screenshots"
						:key="index"
					>
						<img
							:src="require(`@/assets/projects/screenshots/${id}/${screenshot}.png`)"
							:alt="id + ' ' + screenshot"
						/>
					</div>
					<div class="view-more">
						<portfolio-button
							@click.native="viewMore = true"
							text="View More"
							v-show="project.screenshots.length !== 1 && !viewMore"
						/>
					</div>
					<portfolio-seperator marginTop="40" marginBottom="70" />
				</section>
				<section v-show="project.hasReadme" class="readme">
					<h3 class="title" style="margin-bottom: 25px;">Project's README</h3>
					<portfolio-markdown-renderer :markdown="project.readme" />
				</section>
			</div>
			<div v-else class="not-found">The requested parameter {{ id }} was not found</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import PortfolioSeperator from "@/components/base/Seperator.vue";
import PortfolioButton from "@/components/base/Button.vue";
import PortfolioMarkdownRenderer from "@/components/helper/MarkdownRenderer.vue";

import { GET_PROJECTS, GET_PROJECTS_LIST } from "../store/types/getters.type";
import TProject from "../types/ProjectType";
import TList from "../types/ListType";
import linkMixin from "@/mixins/link.mixin";

export default Vue.extend({
	name: "Projects",
	methods: {
		...mapGetters([GET_PROJECTS, GET_PROJECTS_LIST])
	},
	components: {
		PortfolioSeperator,
		PortfolioButton,
		PortfolioMarkdownRenderer
	},
	data: () => ({
		viewMore: false
	}),
	mixins: [linkMixin],
	computed: {
		id(): string {
			return this.$route.params.id;
		},
		project(): TProject {
			const project: TProject =
				this[GET_PROJECTS]()["items"][(this as any).id] || null;

			if (!project) {
				// @ts-ignore: mixins not registered in typescript
				this.openInternalLinkByName("error", {
					message: `Project_with_id_${
						(this as any).id
					}_could_not_be_found.`
				});
			}

			return project;
		},
		metaInfo(): TList {
			return this[GET_PROJECTS_LIST]().filter(
				(el: TList) => el.to === (this as any).id
			)[0];
		}
	},
	metaInfo() {
		return {
			title: `- ${(this as any).id}`
		};
	}
});
</script>

<style lang="scss" scoped>
.projects {
	h3 {
		font-weight: normal;
		font-size: 24px;
	}

	section {
		&.btn-group {
			display: flex;
			margin-bottom: 100px;

			> div {
				margin-right: 5px;
			}
		}

		&.screenshots {
			.screenshot {
				user-select: none;
				cursor: pointer;
				border: 1px solid black;
				border-radius: 5px;
				margin-bottom: 10px;
				background: white;

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
			}

			.view-more {
				display: flex;
				justify-content: center;
			}
		}

		&.readme {
			max-width: 100%;
		}
	}
}
</style>
