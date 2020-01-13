import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import OpenSource from '@/views/OpenSource.vue';
import ErrorComponent from '@/views/Error.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/projects/:id',
		name: 'projects',
		component: Projects
	},
	{
		path: '/open-source/:id',
		name: 'open-source',
		component: OpenSource
	},
	{
		path: '/error/:message',
		name: 'error',
		component: ErrorComponent
	},
	{
		path: '*',
		redirect: '/error/404_-_Not_Found'
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
