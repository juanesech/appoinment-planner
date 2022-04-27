const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder='Enter name'
        onChange={setName}
      />
      <input
        type='text'
        value={phone}
        placeholder='Enter phone'
        onChange={setPhone}
        pattern='^[0-9]{2,3}-? ?[0-9]{6,7}$'
      />
      <input
        type='text'
        value={email}
        placeholder='Enter email'
        onChange={setEmail}
      />
      <input
        type='submit'
      />
    </form>
  );
};

export default ContactForm;
