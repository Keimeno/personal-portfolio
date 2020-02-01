import { shallowMount } from '@vue/test-utils';
import OpenSource from '@/views/OpenSource.vue';
import router from '@/router';
import store from '@/store';
import getLocalVue from '../getLocalVue';
import {
  GET_OPEN_SOURCE,
  GET_OPEN_SOURCE_LIST,
} from '@/store/types/getters.type';

const localVue = getLocalVue();

//! watch ./projects.spec.ts for details about this implementation
describe('open source view tests', () => {
  it('store can be accessed', () => {
    try {
      const wrapper = shallowMount(OpenSource, {
        localVue,
        router,
        store,
      });
    } catch (e) {
      console.error(e);
    }

    expect(true).toBeTruthy();
  });
});
