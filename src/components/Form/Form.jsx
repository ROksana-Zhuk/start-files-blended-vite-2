import { FiSearch } from 'react-icons/fi';
import clsx from 'clsx';
import css from './Form.module.css'

export default function Form({ onSubmit }) {

    const handleSubmit = (event) => {
        event.preventDefault();
       // const form = event.target;
        //const { search } = form.elements;
        //onSubmit(search.value);
         onSubmit(event.target.elements.search.value);
         event.target.reset();
        //form.reset();
      };

  return (
    <form className={clsx(css.form)} onSubmit={handleSubmit}>
      <button className={clsx(css.button)} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={clsx(css.input)}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};


