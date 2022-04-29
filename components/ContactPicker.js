const ContactPicker = ({contacts, setContact}) => {
  return (
    <select 
      onChange={setContact}
      defaultValue=""
    >
      <option value="">Select a contact</option>
      {contacts.map((contact, index) => {
        return (
        <option
          key={index}
          value={contact.name}
        >{contact.name}</option>
        )
      })}
    </select>
  );
};

export default ContactPicker;
