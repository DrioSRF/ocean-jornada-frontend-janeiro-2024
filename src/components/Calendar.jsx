import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Overlay from "./Overlay";
import { useState } from "react";
import Tarefa from "./Tarefa"

export default function StaticDatePickerLandscape() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
        value={selectedDate}
        orientation="landscape"
        onChange={handleDateChange}
        TextField={(params) => <TextField {...params} />}
        onAccept={() => setIsOverlayOpen(!isOverlayOpen)}
      />

      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>
        <Tarefa selectedDate={selectedDate}/>
      </Overlay>,
      
    </LocalizationProvider>
  );
}
