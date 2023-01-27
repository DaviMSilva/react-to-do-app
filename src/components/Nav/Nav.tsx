import { Button } from 'components/Button';
import { NavLogo } from 'components/Nav/NavLogo';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
      <nav className="w-full h-20 bg-blue-400 border-b border-blue-500">
        <div className="w-full max-w-7xl h-full m-auto px-2 flex items-center justify-between">
          <NavLogo />
          <div className='flex gap-4'>
            <Link to={'/tasks'}>
              <Button>Tarefas</Button>
            </Link>
            <Link to={'/task-form'}>
              <Button variant="primary">Nova Tarefa</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
