import { shallowMount } from '@vue/test-utils';
import ErrorComponent from '@/views/Error.vue';
import { VueConstructor } from 'vue/types/umd';
describe('error view tests', () => {
	it('can set text content', () => {
		const message = 'message_test';
		const wrapper = shallowMount(ErrorComponent, {
			mocks: {
				$route: {
					params: {
						message
					}
				}
			}
		});

		expect(wrapper.html()).toMatch(
			'<p class="description">message test</p>'
		);
	});
});
