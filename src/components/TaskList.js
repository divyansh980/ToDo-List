import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask, setTasks } from '../features/tasks/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch(setTasks(storedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => dispatch(toggleTask(index))}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => dispatch(removeTask(index))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
