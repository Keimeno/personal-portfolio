import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import router from '@/router';
import store from '@/store';
import getLocalVue from '../getLocalVue';

const localVue = getLocalVue();

describe('home view tests', () => {
  it('sets correct computed properties', () => {
    const wrapper = shallowMount(Home, {
      localVue,
      router,
      store,
    });

    expect((wrapper.vm as any).projects).toBeTruthy();
  });
});
