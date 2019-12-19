import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItem } from '../models/data';

let nextTodoId = 0;

const todoSlice = createSlice({
  name: 'todos',
  initialState: [] as TodoItem[],
  reducers: {
    addTodo: {
      prepare(text: string): PayloadAction<TodoItem> {
        return {
          type: 'TodoItem',
          payload: {
            text,
            id: nextTodoId++,
          },
        };
      },
      reducer(state: TodoItem[], action: PayloadAction<TodoItem>): void {
        const { id, text } = action.payload;
        state.push({
          id,
          text,
          completed: false,
        });
      },
    },
    toggleTodo(state: TodoItem[], action: PayloadAction<number>): void {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
