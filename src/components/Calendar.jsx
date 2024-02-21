import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Overlay from "./Overlay";
import { useState } from "react";

export default function StaticDatePickerLandscape() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker 
        orientation="landscape"
        onChange={() => setIsOverlayOpen(!isOverlayOpen)}
      />
      <Overlay isOpen={isOverlayOpen} onClose={() => setIsOverlayOpen(!isOverlayOpen)}>
        <h1>Overlay</h1>
      </Overlay>
    </LocalizationProvider>
  );
}