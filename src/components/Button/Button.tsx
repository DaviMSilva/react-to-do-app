
type Props = {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'default'| 'primary' | 'danger'
  children: React.ReactNode
  onClick?: any;
}

export function Button({children, variant, type, onClick}: Props){
  let bgColor = '';
  if(variant=== 'danger') bgColor = 'bg-danger';
  if(variant=== 'primary') bgColor = 'bg-primary ';

  let classButton = `font-bold text-1xl py-2 px-4 rounded-md text-white ${bgColor}`
  return (
    <button onClick={onClick} className={classButton} type={type}>{children}</button>
  )
}