<template>
	<div class="open-source view">
		<div class="container">
			<div class="content">
				<section>
					<h3 class="title">{{ metaInfo.displayName }}</h3>
					<p class="description">{{ project.description }}</p>
					<portfolio-seperator />
				</section>
				<section>
					<h3 class="title">My Work</h3>
					<p class="description" v-html="project.myPart.replace(/\n/g, '<br/>')"></p>
					<portfolio-seperator />
				</section>
				<section class="btn-group">
					<a
						v-for="(pullRequest, index) in project.myPullRequests"
						:key="index"
						style="text-decoration: none;"
						target="_blank"
						:href="pullRequest.url"
					>
						<portfolio-button :text="pullRequest.name" />
					</a>
				</section>
				<section v-show="project.hasReadme" class="readme">
					<h3 class="title" style="margin-bottom: 25px;">README</h3>
					<portfolio-markdown-renderer :markdown="project.readme" />
				</section>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import {
	GET_OPEN_SOURCE,
	GET_OPEN_SOURCE_LIST
} from "../store/types/getters.type";
import TOpenSource from "../types/OpenSourceType";
import TList from "../types/ListType";

import projectsMixin from "@/mixins/projects.mixin";

export default Vue.extend({
	name: "open-source",
	methods: {
		...mapGetters([GET_OPEN_SOURCE, GET_OPEN_SOURCE_LIST])
	},
	mixins: [projectsMixin],
	computed: {
		project(): TOpenSource {
			const project: TOpenSource =
				this[GET_OPEN_SOURCE]()["items"][(this as any).id] || null;

			return project;
		},
		metaInfo(): TList {
			return this[GET_OPEN_SOURCE_LIST]().filter(
				(el: TList) => el.to === (this as any).id
			)[0];
		}
	}
});
</script>

<style lang="scss" scoped>
.open-source {
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

		&.readme {
			max-width: 100%;
		}
	}
}
</style>
