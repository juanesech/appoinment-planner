import Layout from "../loyouts";
import { useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import TileList from "../components/TileList";

const Appointments = () => {
  let contacts = [
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
  ];

  const [appointments, setAppointments] = useState([]);
  const addNewAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return ([
        ...prev,
        {
          title,
          contact,
          date,
          time
        }
      ])
    });
  }

  const [title, setTitle] = useState('');
  const handleTitleChange = ({target}) => {
    setTitle(target.value);
  }
  
  const [date, setDate] = useState('');
  const handleDateChange = ({target}) => {
    setDate(target.value);
  }

  const [time, setTime] = useState('');
  const handleTimeChange = ({target}) => {
    setTime(target.value);
  }

  const [contact, setContact] = useState({});
  const handleContactChange = ({target}) => {
    setContact(target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewAppointment(title, contact, date, time);
    setTitle('');
    setContact({});
    setDate('');
    setTime('');
  };

  return (
    <Layout>
      <div>
        <section>
          <h2>Add Appointment</h2>
          <AppointmentForm
            contactsArray={contacts}
            title={title}
            setTitle={handleTitleChange}
            contact={contact}
            setContact={handleContactChange}
            date={date}
            setDate={handleDateChange}
            time={time}
            setTime={handleTimeChange}
            handleSubmit={handleSubmit}
          />
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
          <TileList
            objectArray={appointments}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Appointments;
