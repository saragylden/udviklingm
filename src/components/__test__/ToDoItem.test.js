import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ToDoItem from '@/components/ToDoItem.vue';

describe('ToDoItem.vue', () => {
  it('renders todo item correctly', async () => {
    const label = 'Example Todo';
    const wrapper = mount(ToDoItem, {
      props: {
        label,
        done: false,
        id: '1',
      },
    });

    // Assert rendering of label and checkbox status
    expect(wrapper.find('.checkbox-label').text()).toBe(label);
    expect(wrapper.find('.checkbox').element.checked).toBe(false);
  });

  it('emits item-deleted event when delete button is clicked', async () => {
    const wrapper = mount(ToDoItem, {
      props: {
        label: 'Example Todo',
        done: false,
        id: '1',
      },
    });

    // Trigger delete button click
    await wrapper.find('.btn__danger').trigger('click');

    // Assert emitted event
    expect(wrapper.emitted('item-deleted')).toBeTruthy();
  });

  it('toggles to item edit form when edit button is clicked', async () => {
    const wrapper = mount(ToDoItem, {
      props: {
        label: 'Example Todo',
        done: false,
        id: '1',
      },
    });

    // Trigger edit button click
    await wrapper.find('.btn').trigger('click');

    // Assert component state
    expect(wrapper.vm.isEditing).toBe(true);
  });

  it('emits item-edited event when item is edited', async () => {
    const wrapper = mount(ToDoItem, {
      props: {
        label: 'Example Todo',
        done: false,
        id: '1',
      },
    });

    // Set component state to editing
    await wrapper.setData({ isEditing: true });

    // Emit item-edited event from child component
    await wrapper.findComponent({ name: 'ToDoItemEditForm' }).vm.$emit('item-edited', 'New Label');

    // Assert emitted event
    expect(wrapper.emitted('item-edited')).toBeTruthy();
  });

  it('emits edit-cancelled event when edit is cancelled', async () => {
    const wrapper = mount(ToDoItem, {
      props: {
        label: 'Example Todo',
        done: false,
        id: '1',
      },
    });

    // Set component state to editing
    await wrapper.setData({ isEditing: true });

    // Emit edit-cancelled event from child component
    await wrapper.findComponent({ name: 'ToDoItemEditForm' }).vm.$emit('edit-cancelled');

    // Assert emitted event
    expect(wrapper.emitted('edit-cancelled')).toBeTruthy();
  });

  it('emits checkbox-changed event when checkbox is toggled', async () => {
    const wrapper = mount(ToDoItem, {
      props: {
        label: 'Example Todo',
        done: false,
        id: '1',
      },
    });

    // Toggle checkbox
    await wrapper.find('.checkbox').setChecked(true);

    // Assert emitted event
    expect(wrapper.emitted('checkbox-changed')).toBeTruthy();
  });
});
