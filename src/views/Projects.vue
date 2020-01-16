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
					<a target="_blank" style="text-decoration: none;" :href="project.livePreview">
						<portfolio-button
							v-show="project.hasLivePreview"
							@click.native="openExternalLink(project.livePreview)"
							text="Live Preview"
						/>
					</a>
					<a target="_blank" style="text-decoration: none;" :href="project.sourceCode">
						<portfolio-button
							v-show="project.hasSourceCode"
							@click.native="openExternalLink(project.sourceCode)"
							text="Source Code"
						/>
					</a>
				</section>
				<section class="screenshots" v-show="project.screenshots.length">
					<h3 class="title" style="margin-bottom: 15px;">Screenshots</h3>
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
					<portfolio-seperator v-show="project.hasReadme" marginTop="40" marginBottom="70" />
				</section>
				<section v-show="project.hasReadme" class="readme">
					<h3 class="title" style="margin-bottom: 25px;">Project's README</h3>
					<portfolio-markdown-renderer :markdown="project.readme" />
				</section>
			</div>
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

import projectsMixin from "@/mixins/projects.mixin";

export default Vue.extend({
	name: "Projects",
	methods: {
		...mapGetters([GET_PROJECTS, GET_PROJECTS_LIST])
	},
	mixins: [projectsMixin],
	computed: {
		project(): TProject {
			const project: TProject =
				this[GET_PROJECTS]()["items"][(this as any).id] || null;

			return project;
		},
		metaInfo(): TList {
			return this[GET_PROJECTS_LIST]().filter(
				(el: TList) => el.to === (this as any).id
			)[0];
		}
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

			> a {
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
