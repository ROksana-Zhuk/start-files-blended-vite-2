import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css'

const EditForm = ({ updateTodo, cancelUpdate, todo}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        updateTodo(
            event.target.elements.text.value,
            todo.id
        );

        event.target.reset();

      };


  return (
    <form className={style.form} onSubmit={handleSubmit}>
  <button className={style.submitButton} type="submit">
    <RiSaveLine color="green" size="16px" />
  </button>

  <button className={style.editButton} type="button" onClick={cancelUpdate}>
    <MdOutlineCancel color="red" size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    defaultValue={todo.text}
    autoFocus
  />
</form>

  )
};
export default EditForm;
