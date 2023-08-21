import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
