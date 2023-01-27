import { Nav, TaskForm } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Task } from 'types/types';

export function TaskFormPage() {
  const navigate = useNavigate();
  const { id } = useParams() || null;
  const [toEditTask, setToEditTask] = useState<Task>();

  function saveTask(task: Task) {
    if (task.id) {
      fetch(`http://localhost:3004/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: task.description })
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(
            '🚀 ~ file: TaskFormPage.tsx:17 ~ createTask ~ data',
            data
          );
          navigate('/tasks');
        })
        .catch(err => {
          console.log('🚀 ~ file: TaskFormPage.tsx:20 ~ createTask ~ err', err);
        });
        
    } else {
      task.completed = false;

      fetch('http://localhost:3004/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(
            '🚀 ~ file: TaskFormPage.tsx:17 ~ createTask ~ data',
            data
          );
        })
        .catch(err => {
          console.log('🚀 ~ file: TaskFormPage.tsx:20 ~ createTask ~ err', err);
        });
      navigate('/tasks');
    }
  }

  useEffect(() => {
    if (id != null) {
      fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application'
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log('🚀 ~ file: TaskFormPage.tsx:56 ~ .then ~ data', data);
          setToEditTask(data);
        })
        .catch(err => {
          console.log('🚀 ~ file: TaskFormPage.tsx:59 ~ .then ~ err', err);
        });
    }
  }, [id]);
  return (
    <>
      <Nav />
      <TaskForm handleSubmit={saveTask} taskData={toEditTask} />
    </>
  );
}
