import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Overlay from "./Overlay";
import TarefaTeste from "./TarefaTeste"


export default function StaticDatePickerLandscape() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const [isTarefaOpen, setIsTarefaOpen] = useState(false)
  const [isReuniaoOpen, setIsReuniaoOpen] = useState(false)
  const [isEventoOpen, setIsEventoOpen] = useState(false)
  const [isLembreteOpen, setIsLembreteOpen] = useState(false)
  const [isAlarmeOpen, setIsAlarmeOpen] = useState(false)

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

      <TarefaTeste isOpen={isTarefaOpen} onClose={() => setIsTarefaOpen(!isTarefaOpen)}>
      </TarefaTeste>,
      <Reuniao isOpen={isReuniaoOpen} onClose={() => setIsReuniaoOpen(!isReuniaoOpen)}>
      </Reuniao>,
      <Evento isOpen={isEventoOpen} onClose={() => setIsEventoOpen(!isEventoOpen)}>
      </Evento>,
      <Alarme isOpen={isAlarmeOpen} onClose={() => setIsAlarmeOpen(!isAlarmeOpen)}>
      </Alarme>,
      <Lembrete isOpen={isLembreteOpen} onClose={() => setIsLembreteOpen(!isLembreteOpen)}>
      </Lembrete>,
      <Overlay
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
        tarefa={() => setIsTarefaOpen(!isTarefaOpen)}
        reuniao={() => setIsReuniaoOpen(!isReuniaoOpen)}
        evento={() => setIsEventoOpen(!isEventoOpen)}
        lembrete={() => setIsLembreteOpen(!isLembreteOpen)}
        alarme={() => setIsAlarmeOpen(!isAlarmeOpen)}>
      </Overlay>,
      
    </LocalizationProvider>
  );
}
