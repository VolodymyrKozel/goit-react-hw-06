import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';
export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  return (
    <>
      <ul className={css['contact-list']}>
        <li className={css['contact-item']}>
          <svg className={css['svg-icon']} width="24" height="24">
            <use href="img/icons.svg#icon-user" />
          </svg>
          <p>{name}</p>
        </li>
        <li className={css['contact-item']}>
          <svg className={css['svg-icon']} width="24" height="24">
            <use href="img/icons.svg#icon-phone" />
          </svg>
          <p>{number}</p>
        </li>
      </ul>
      <button
        onClick={() => dispatch(deleteContact(id))}
        id={id}
        className={css['btn-contact']}>
        Delete
        <svg className={css['svg-icon']} width="24" height="24">
          <use href="img/icons.svg#icon-bin" />
        </svg>
      </button>
    </>
  );
}
