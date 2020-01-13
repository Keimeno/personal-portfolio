import {
	GET_PROJECTS,
	GET_PROJECTS_LIST,
	GET_OPEN_SOURCE,
	GET_OPEN_SOURCE_LIST
} from '../types/getters.type';

const getters = {
	[GET_PROJECTS](state: any) {
		return state.projects;
	},
	[GET_PROJECTS_LIST](state: any) {
		return state.projects.list;
	},
	[GET_OPEN_SOURCE](state: any) {
		return state.openSource;
	},
	[GET_OPEN_SOURCE_LIST](state: any) {
		return state.openSource.list;
	}
};

export default getters;
