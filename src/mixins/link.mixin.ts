import Vue from 'vue';
import vm from '@/main';

const link = Vue.extend({
	methods: {
		openExternalLink(link: string) {
			window.open(link, '_blank');
		},
		openInternalLinkByPath(path: string) {
			vm.$router.push({ path });
		},
		openInternalLinkByName(name: string, params?: object) {
			vm.$router.push({ name, params: { ...(params || {}) } });
		}
	}
});

export default link;
