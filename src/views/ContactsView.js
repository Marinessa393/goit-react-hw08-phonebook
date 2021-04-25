import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsView = () => {
  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Phonebook__section">
          <ContactForm />
        </section>
        <section title="Contacts" className="Contacts">
          <h2 className="Contacts__title">Contacts</h2>
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
};
export default ContactsView;
