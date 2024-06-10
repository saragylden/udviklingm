import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ToDoItemEditForm from '@/components/ToDoItemEditForm.vue';

describe('ToDoItemEditForm.vue', () => {
  it('emits "item-edited" event with the correct payload when form is submitted', async () => {
    const label = 'Example Todo';
    const newLabel = 'Updated Todo';
    const wrapper = mount(ToDoItemEditForm, {
      props: {
        label,
        id: '1',
      },
    });

    // Set new label in input
    const input = wrapper.find('input');
    await input.setValue(newLabel);

    // Trigger form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assert emitted event
    expect(wrapper.emitted('item-edited')).toBeTruthy();
    expect(wrapper.emitted('item-edited')[0][0]).toBe(newLabel);
  });

  it('emits "edit-cancelled" event when cancel button is clicked', async () => {
    const label = 'Example Todo';
    const wrapper = mount(ToDoItemEditForm, {
      props: {
        label,
        id: '1',
      },
    });

    // Trigger cancel button click
    await wrapper.find('.btn').trigger('click');

    // Assert emitted event
    expect(wrapper.emitted('edit-cancelled')).toBeTruthy();
  });
});
