import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ToDoForm from '@/components/ToDoForm.vue';

describe('ToDoForm.vue', () => {
  it('emits "todo-added" event with the correct payload when form is submitted', async () => {
    const wrapper = mount(ToDoForm);

    // Find input and set value
    const input = wrapper.find('input');
    await input.setValue('New Todo');

    // Find form and trigger submit event
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Assert event has been emitted
    expect(wrapper.emitted()['todo-added']).toBeTruthy();
    expect(wrapper.emitted()['todo-added'][0]).toEqual(['New Todo']);
  });

  it('clears the input after form submission', async () => {
    const wrapper = mount(ToDoForm);

    // Find input and set value
    const input = wrapper.find('input');
    await input.setValue('New Todo');

    // Find form and trigger submit event
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Assert input value has been cleared
    expect(wrapper.vm.label).toBe('');
    expect(input.element.value).toBe('');
  });

  it('does not emit event if input is empty', async () => {
    const wrapper = mount(ToDoForm);

    // Find form and trigger submit event without setting input value
    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    // Assert event has not been emitted
    expect(wrapper.emitted()['todo-added']).toBeFalsy();
  });
});
