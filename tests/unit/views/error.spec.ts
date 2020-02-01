import { shallowMount } from '@vue/test-utils';
import ErrorComponent from '@/views/Error.vue';

describe('error view tests', () => {
  it('can set message from path', () => {
    const message = 'message_test';
    const wrapper = shallowMount(ErrorComponent, {
      mocks: {
        $route: {
          params: {
            message,
          },
        },
      },
    });

    expect(wrapper.html()).toMatch('<p class="description">message test</p>');
  });
});
