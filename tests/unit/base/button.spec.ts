import { shallowMount } from '@vue/test-utils';
import Button from '@/components/base/Button.vue';

describe('button tests', () => {
  it('can set text content', () => {
    const text = 'hello';
    const wrapper = shallowMount(Button, {
      propsData: {
        text,
      },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
