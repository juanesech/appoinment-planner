import Layout from "../loyouts";
import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";
import { saveNewContact, getContacts, deleteContact } from "../lib/fauna";

const Contacts = () => {
  const [contacts, setContacts] = useState([{}]);
  useEffect(() => {
    const fetchContacts = async () => {
      const contactArray = await getContacts();
      setContacts(contactArray);
    }
    fetchContacts();
  }, []);

  const addNewContact = (name, phone, email) => {
    saveNewContact({name, phone, email});
    setContacts((prev) => {
      return ([
        ...prev,
        {
          name,
          phone,
          email
        }
      ])
    });
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const checkContactDuplicity = (name) => {
    let exists = contacts.find((contact) => contact.name === name);
    if (exists){
      console.log(`Contact with ${name} already exists.`);
      return true
    }
    return false
  }

  const handleNameChange = ({target}) => {
    const value = target.value;
    setName(value);
  }

  const handleEmailChange = ({target}) => {
    const value = target.value;
    setEmail(value);
  }

  const handlePhoneChange = ({target}) => {
    const value = target.value;
    setPhone(value);
  }

  const handleDelete = (contactId) => {
    return async () => {
      console.log(`ID: ${contactId}`);
      return await deleteContact(contactId);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkContactDuplicity(name)){
      addNewContact(name, phone, email);
      setName('');
      setEmail('');
      setPhone('');
      return
    }
    alert(`Contact with name ${name} already exists.`);
  };

  return (
    <Layout>
      <div>
        <section>
          <h2>Add Contact</h2>
          <ContactForm
            name={name}
            phone={phone}
            email={email}
            setEmail={handleEmailChange}
            setName={handleNameChange}
            setPhone={handlePhoneChange}
            handleSubmit={handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList
            objectArray={contacts}
            onDelete={handleDelete}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;
