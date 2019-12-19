import React, { Component } from 'react';

type TodoProps = {
  readonly onClick: () => void;
  readonly completed: boolean;
  readonly text: string;
};

export class Todo extends Component<TodoProps, {}> {
  public render() {
    const { onClick, completed, text } = this.props;
    return (
      <li
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
