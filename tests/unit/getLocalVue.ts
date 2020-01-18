import { createLocalVue } from '@vue/test-utils';
import projectsMixin from '@/mixins/projects.mixin';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export default () => {
	const localVue = createLocalVue();

	localVue.use(VueRouter);
	localVue.use(Vuex);

	localVue.mixin(projectsMixin);

	return localVue;
};
