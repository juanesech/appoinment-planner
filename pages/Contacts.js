import Layout from "../loyouts";
import { useState } from "react";

const Contacts = () => {

  const [constacts, setContacts] = useState([]);
  const addNewContact = (newContact) => {
    const {name, phoneNumber, email} = newContact;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  return (
    <Layout>
      <div>
        <section>
          <h2>Add Contact</h2> 
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
        </section>
      </div>
    </Layout>
  );
};

export default Contacts;
