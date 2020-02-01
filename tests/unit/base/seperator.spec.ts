import { shallowMount } from '@vue/test-utils';
import Seperator from '@/components/base/Seperator.vue';

describe('seperator tests', () => {
  it('can set text content', () => {
    const margins = {
      marginTop: '1',
      marginBottom: '1',
    };
    const wrapper = shallowMount(Seperator, {
      propsData: {
        ...margins,
      },
    });

    expect(wrapper.attributes()).toMatchObject({
      style: 'margin-top: 1px; margin-bottom: 1px;',
    });
  });
});
