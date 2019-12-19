import React, { Component } from 'react';
import { Todo } from './Todo';
import { TodoItem } from '../models/data';

type TodoListStateProps = {
  readonly todos: TodoItem[];
};

type TodoListDispatchProps = {
  readonly toggleTodo: (id: number) => void;
};

type TodoListProps = TodoListStateProps & TodoListDispatchProps;

export class TodoList extends Component<TodoListProps, {}> {
  public render() {
    const { todos, toggleTodo } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed || false}
            onClick={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
