import Layout from "../loyouts";
import { useState } from "react";

const Appointments = () => {
  /*
  Define state variables for 
  appointment info
  */

  const [appointments, setAppointments] = useState([]);
  const addNewAppointment = (newAppointment) => {
    setAppointments((prev) => {
      const {title, contact, date, time} = newAppointment;
      [...prev,
        {
          title: title,
          contact: contact ,
          date: date,
          time: time
        }
      ]
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <Layout>
      <div>
        <section>
          <h2>Add Appointment</h2>
        </section>
        <hr />
        <section>
          <h2>Appointments</h2>
        </section>
      </div>
    </Layout>
  );
};

export default Appointments;
