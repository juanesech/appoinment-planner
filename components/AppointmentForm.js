import ContactPicker from "./ContactPicker";

const AppointmentForm = ({
  contactsArray,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        placeholder='title'
        value={title}
        onChange={setTitle}
      />
      <ContactPicker
        contacts={contactsArray}
        setContact={setContact}
      />
      <input type='date'
        min={getTodayString()}
        value={date}
        onChange={setDate}
      />
      <input type='time'
        placeholder='time'
        value={time}
        onChange={setTime}
      />
      <input type='submit'/>
    </form>
  );
};

export default AppointmentForm;
