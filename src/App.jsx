import css from './App.module.css';
import ContactForm from './components/contactform/ContactForm';
import ContactList from './components/contactlist/ContactList';
import SearchBox from './components/searchbox/SearchBox';
function App() {
  return (
    <div className={css['container']}>
      <h1 className={css['app-title']}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
