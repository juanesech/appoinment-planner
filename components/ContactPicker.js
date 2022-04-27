const ContactPicker = ({contacts, setContact}) => {
  return (
    <select onChange={setContact}>
      {contacts.forEach((contact, index) => {
        <option
          key={index}
          value={contact.name}
        >{contact.name}</option>
      })}
    </select>
  );
};

export default ContactPicker;
