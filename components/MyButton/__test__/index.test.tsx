import { mount } from '@vue/test-utils';
import MyButton from '../index.vue';

describe('MyButton', () => {
  test('render <MyButton> content correctly', () => {
    const wrapper = mount(MyButton, {
      global: {
        mocks: {
          $t: (msg: string) => msg,
        },
      },
      slots: {
        default: 'test button',
      },
    });

    expect(wrapper.text()).toContain('test button');
  });
});
