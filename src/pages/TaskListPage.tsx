import { Nav, TaskItem } from 'components';

import { useEffect, useState } from 'react';
import { Task } from 'types/types';

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/tasks', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setTasks(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function removeTask(id: number) {
    fetch(`http://localhost:3004/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('🚀 ~ file: TaskListPage.tsx:41 ~ removeTask ~ data', data);
        setTasks(tasks.filter((task: Task) => task.id !== id))
      })
      .catch(err => {
        console.log('🚀 ~ file: TaskListPage.tsx:37 ~ removeTask ~ err', err);
      });
  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Tarefas</h1>
        {tasks.length > 0 &&
          tasks.map((task: Task) => (
            <TaskItem 
              id={task.id}
              description={task.description}
              completed={task.completed}
              key={task.id}
              handleRemove={removeTask}
            />
          ))}
      </div>
    </>
  );
}
