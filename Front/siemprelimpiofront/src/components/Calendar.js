// import availability from "../BDTest/MockApi.js"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const availableHours = ['10:00 AM', '2:00 PM', '4:00 PM']; // Reemplaza esto con tus horas disponibles

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h2>Horas Disponibles</h2>
      <ul>
        {availableHours.map((hour) => (
          <li key={hour}>{hour}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyCalendar;