import React, { Children, Fragment,  useState } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export function Alarme({ isOpen, onClose, children, selectedDate}) {
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

  return (
    <Fragment>
      {isOpen && (
        <div className='overlay'>
          <div className="overlay__background" onClick={onClose} />
          <div className="atividade__container">
            <div className="atividade__control">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Criar reunião</h2>
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
            </div>
          </div>
        {children}
        </div>
      )}
    </Fragment>
  );
}

export default Alarme;