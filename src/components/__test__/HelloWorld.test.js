import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello Vitest';
    const wrapper = mount(HelloWorld, {
      props: { msg }
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('contains essential links', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' }
    });
    const essentialLinks = [
      'Core Docs',
      'Forum',
      'Community Chat',
      'Twitter',
      'News'
    ];
    essentialLinks.forEach(link => {
      expect(wrapper.html()).toContain(link);
    });
  });
});
