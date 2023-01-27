import { Button } from 'components/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Task } from 'types/types';

type Props = {
  taskData?: Task;
  handleSubmit?: any;
};

export function TaskForm({ taskData, handleSubmit }: Props) {
  let h1 = 'Nova Tarefa';
  if(taskData) h1 = 'Editando Tarefa'
  const [task, setTask] = useState({} as Task);

  useEffect(()=>{
    if(taskData){
      setTask(taskData)
    }
  },[taskData])

  const submit = (event: any) => {
    event.preventDefault();
    handleSubmit(task);
  };

  const handleChange =(event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setTask({...task, description: event.target.value})
  }

  return (
    <>
      <div className="container">
        <h1>{h1}</h1>
        <form onSubmit={submit}>
          <div className="my-3">
            <label className="font-bold text-lg" htmlFor="description">
              Descrição:
            </label>
            <textarea
              className="relative block w-full appearance-none rounded-none rounded-t-md border"
              name="description"
              id=""
              cols={30}
              rows={5}
              onChange={handleChange}
              value={task.description ? task.description : ''}
            ></textarea>
          </div>
          <div className="flex gap-2">
            <Button variant="primary" type="submit">
              Salvar
            </Button>
            <Link to={'/tasks'}>
              <Button variant="danger">Cancelar</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
