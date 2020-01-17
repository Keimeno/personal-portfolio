import Vue from 'vue';

const link = Vue.extend({
	name: 'LinkMixin',
	methods: {
		openExternalLink(link: string) {
			window.open(link, '_blank');
		},
		openInternalLinkByPath(path: string) {
			this.$router.push({ path });
		},
		openInternalLinkByName(name: string, params?: object) {
			this.$router.push({ name, params: { ...(params || {}) } });
		}
	}
});

export default link;
