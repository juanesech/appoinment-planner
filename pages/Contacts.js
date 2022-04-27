import Layout from "../loyouts";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import TileList from "../components/TileList";

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      name: 'Juan',
      phone: '664865692',
      email: 'juanesech@gmail.com'
    },
    {
      name: 'Evelyn',
      phone: '674576318',
      email: 'puerta.eve04@gmail.com'
    }
  ]);
  const addNewContact = (name, phone, email) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkContactDuplicity(name)){
      addNewContact(name, phone, email);
      setName('');
      setEmail('');
      setPhone('');
      return
    }
    alert(`Contact with name ${name} already exists.`)
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
          />
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;
