import { shallowMount } from '@vue/test-utils';
import MarkdownRenderer from '@/components/helper/MarkdownRenderer.vue';

describe('markdown renderer tests', () => {
  it('can set text content', () => {
    const markdown = '# Render me';
    const wrapper = shallowMount(MarkdownRenderer, {
      propsData: {
        markdown,
      },
    });

    expect((wrapper.vm as any).render).toMatch('Render me</h1>');
  });
});
