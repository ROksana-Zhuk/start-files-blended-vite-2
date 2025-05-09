import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import clsx from 'clsx';
import css from './TodoListItem.module.css'
import Text from '../Text/Text'



export default function TodoListItem({ todoProp, onDelete, count, onEdit }) {

  return (

    <div className={clsx(css.box)}>
    <Text textAlign="center" marginBottom="20">
      TODO #{count}
    </Text>
    <Text>{todoProp.text}</Text>
    <button className={clsx(css.deleteButton)}
            type="button"
            onClick={() => onDelete(todoProp.id)} >
      <RiDeleteBinLine size={24} />
    </button>

    <button className={clsx(css.editButton)}
            type="button"
            onClick={() => onEdit(todoProp) }>
      <RiEdit2Line size={24} />
    </button>

  </div>


  )
};



