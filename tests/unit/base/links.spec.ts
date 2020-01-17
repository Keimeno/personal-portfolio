import { shallowMount, createLocalVue } from '@vue/test-utils';
import Links from '@/components/base/Links.vue';
import linkMixin from '@/mixins/link.mixin';
import { VueConstructor } from 'vue/types/umd';
import VueRouter from 'vue-router';
import router from '@/router';

let localVue: VueConstructor<Links>;

(process as any).on(
	'unhandledRejection',
	(err: object | null | undefined, p: Promise<null>) => {
		if (err) {
			return;
		}

		p.finally(() => 0);
	}
);

describe('links tests', () => {
	beforeAll(() => {
		localVue = createLocalVue();
		localVue.use(VueRouter);
		localVue.mixin(linkMixin);
	});

	it('can activate low contrast mode', () => {
		const hasLowContrastBackground = true;
		const wrapper = shallowMount(Links, {
			localVue,
			propsData: {
				hasLowContrastBackground
			}
		});

		const image = wrapper
			.find('div')
			.find('div')
			.find('img');

		expect(image.classes()).toMatchObject(['inverted']);
	});

	it('can open external links', () => {
		const wrapper = shallowMount(Links, {
			localVue
		});

		expect(
			(wrapper.vm as any).openExternalLink('//google.com')
		).toBeFalsy();
	});

	it('can open internal links by path', async () => {
		const wrapper = shallowMount(Links, {
			localVue,
			router
		});

		expect(
			(wrapper.vm as any).openInternalLinkByPath('/error/')
		).toBeFalsy();
	});

	it('can open internal links by name', async () => {
		const wrapper = shallowMount(Links, {
			localVue,
			router
		});

		expect((wrapper.vm as any).openInternalLinkByName('error')).toBeFalsy();
	});
});
