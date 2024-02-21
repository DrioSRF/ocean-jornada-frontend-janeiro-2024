import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export function Tarefa({ selectedDate }) {

  // Use o estado para controlar os valores dos campos de texto
  const [campo1, setCampo1] = useState('');

  const [campo2, setCampo2] = useState('');

  const [selectedDateIn, setSelectedDate] = useState(selectedDate);

  // Funções para lidar com mudanças nos campos de texto
  const handleCampo1Change = (event) => {
    setCampo1(event.target.value);
  };

  const handleCampo2Change = (event) => {
    setCampo2(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date)
  };

  // Renderizando os campos de texto
  return (
    <div>
      <h2>Criar tarefa</h2>
      <TextField
        label="Título"
        variant="outlined"
        value={campo1}
        onChange={handleCampo1Change}
      />

      <br />
      <br />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Selecione uma data"
          value={selectedDateIn}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <br />
      <br />

      <TextField
        label="Descrição"
        variant="outlined"
        value={campo2}
        onChange={handleCampo2Change}
      />
    </div>
  )
}

export default Tarefa