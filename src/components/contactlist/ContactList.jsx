import Contact from './contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import css from './ContactList.module.css';
export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectNameFilter);
  const contactsData = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <ul className={css['contact-list']}>
      {contacts && contacts.length === 0 && (
        <li className={css['contact-item']}>You have no contacts yet</li>
      )}
      {query && contactsData.length === 0 && (
        <li className={css['contact-item']}>No contacts found</li>
      )}
      {contactsData ? (
        contactsData.map(contact => (
          <li className={css['contact-item']} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <li className={css['contact-item']}>
          <p>No contacts found</p>
        </li>
      )}
    </ul>
  );
}
