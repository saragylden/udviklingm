import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders correctly', async () => {
    const wrapper = mount(App);
    // Assert rendering of title
    expect(wrapper.find('h1').text()).toBe('To-Do List');
    // Assert rendering of list summary
    expect(wrapper.find('#list-summary').exists()).toBe(true);
    // Assert rendering of ToDoItems
    expect(wrapper.findAll('.stack-large li').length).toBe(wrapper.vm.ToDoItems.length);
  });

  it('adds a todo item when todo-added event is emitted', async () => {
    const wrapper = mount(App);
    // Emit todo-added event
    await wrapper.findComponent({ name: 'ToDoForm' }).vm.$emit('todo-added', 'New ToDo');
    // Assert addition of new todo item
    expect(wrapper.findAll('.stack-large li').length).toBe(wrapper.vm.ToDoItems.length);
  });
});
