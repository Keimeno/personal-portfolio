<template>
	<div class="open-source view">
		<div class="container">
			<div class="content">
				<section>
					<h3 class="title">{{ metaInfo.displayName }}</h3>
					<p class="description">{{ openSource.description }}</p>
					<portfolio-seperator />
				</section>
				<section>
					<h3 class="title">My Work</h3>
					<p class="description" v-html="openSource.myPart.replace(/\n/g, '<br/>')"></p>
					<portfolio-seperator />
				</section>
				<section class="btn-group">
					<portfolio-button
						v-for="(pullRequest, index) in openSource.myPullRequests"
						:key="index"
						@click.native="openExternalLink(pullRequest.url)"
						:text="pullRequest.name"
					/>
				</section>
				<section v-show="openSource.hasReadme" class="readme">
					<h3 class="title" style="margin-bottom: 25px;">README</h3>
					<portfolio-markdown-renderer :markdown="openSource.readme" />
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

import {
	GET_OPEN_SOURCE,
	GET_OPEN_SOURCE_LIST
} from "../store/types/getters.type";
import TOpenSource from "../types/OpenSourceType";
import TList from "../types/ListType";
import linkMixin from "@/mixins/link.mixin";

export default Vue.extend({
	name: "open-source",
	methods: {
		...mapGetters([GET_OPEN_SOURCE, GET_OPEN_SOURCE_LIST])
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
		openSource(): TOpenSource {
			const openSource: TOpenSource =
				this[GET_OPEN_SOURCE]()["items"][(this as any).id] || null;

			if (!openSource) {
				// @ts-ignore: mixins not registered in typescript
				this.openInternalLinkByName("error", {
					message: `Project_with_id_${
						(this as any).id
					}_could_not_be_found.`
				});
			}

			return openSource;
		},
		metaInfo(): TList {
			return this[GET_OPEN_SOURCE_LIST]().filter(
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
.open-source {
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

		&.readme {
			max-width: 100%;
		}
	}
}
</style>
