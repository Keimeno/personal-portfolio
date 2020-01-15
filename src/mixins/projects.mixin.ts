import Vue from 'vue';

import PortfolioSeperator from '@/components/base/Seperator.vue';
import PortfolioButton from '@/components/base/Button.vue';
import PortfolioMarkdownRenderer from '@/components/helper/MarkdownRenderer.vue';

import linkMixin from '@/mixins/link.mixin';

export default Vue.extend({
	computed: {
		id(): string {
			return this.$route.params.id;
		}
	},
	data: () => ({
		viewMore: false
	}),
	mixins: [linkMixin],
	components: {
		PortfolioSeperator,
		PortfolioButton,
		PortfolioMarkdownRenderer
	},
	mounted() {
		// @ts-ignore
		if (!this.project) {
			/**
			 * Need to append this function call to the end of the call stack,
			 * as the router has not been registered at that time.
			 */
			setTimeout(() => {
				// @ts-ignore
				this.openInternalLinkByName('error', {
					message: `Project_with_id_${
						(this as any).id
					}_could_not_be_found.`
				});
			}, 0);
		}
	},
	metaInfo() {
		return {
			title: `- ${(this as any).id}`
		};
	}
});
