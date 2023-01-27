import { Button } from 'components/Button';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function TaskItem({ id, description, completed, handleRemove }: any) {
  const [isChecked, setIsChecked] = useState<boolean>(completed);

  const handleOnChange = () => {
    fetch(`http://localhost:3004/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      // propriedade isChecked não é atualizda ate o fim da função
      body: JSON.stringify({ completed: !isChecked })
    })
      .then(resp => resp.json())
      .then(data => {
        setIsChecked(!isChecked);
        console.log('🚀 ~ file: TaskItem.tsx:19 ~ handleOnChange ~ data', data);
      })
      .catch(err => {
        console.log('🚀 ~ file: TaskItem.tsx:23 ~ handleOnChange ~ err', err);
      });
  };
  const remove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleRemove(id);
  };
  return (
    <>
      <div className="w-full p-4 my-2 flex items-center border rounded border-primary">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleOnChange}
        ></input>
        {isChecked ? (
          <p className="text-lg flex grow line-through">{description}</p>
        ) : (
          <p className="text-lg flex grow">{description}</p>
        )}
        <div className="flex gap-2">
          <Link to={`/task-form/${id}`}>
            <Button variant="primary">Alterar</Button>
          </Link>
          <Button variant="danger" onClick={remove}>
            Excluir
          </Button>
        </div>
      </div>
    </>
  );
}
