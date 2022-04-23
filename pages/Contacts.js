import Layout from "../loyouts";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";

const Contacts = () => {

  const [contacts, setContacts] = useState([]);
  const addNewContact = ({ name, phoneNumber, email }) => {
    setContacts((prev) => {
      [
        ...prev,
        {
          name,
          phoneNumber,
          email
        }
      ]
    });
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');

  const checkContactDuplicity = (name) => {
    let exists = Contacts.find((contact) => contact.name === name);
    if (exists){
      console.log(`Contact with ${name} already exists.`);
      return true
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target;
    
    if (!checkContactDuplicity(value.name)){
      addNewContact(value);
      setName('');
      setEmail('');
      setPhone('');
      return
    }
    alert(`Contact with ${value.name} already exists.`)
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
            handleSubmit={handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList
            contactArray={contacts}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;
