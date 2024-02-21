import React, { Children, Fragment,  useState } from 'react';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function TarefaTeste({ isOpen, onClose, children, dateIn}) {
  // Use o estado para controlar os valores dos campos de texto
  const [campo1, setCampo1] = useState('');

  const [campo2, setCampo2] = useState('');

  const [selectedDateIn, setSelectedDate] = useState(dateIn);

  const [value, setValue] = React.useState('nao-repetir');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

  const teste = () => {
    console.log(campo1);
    console.log(campo2);
    console.log(selectedDateIn);
    console.log(value);
    onClose()
  }

  return (
    <Fragment>
      {isOpen && (
        <div className='overlay'>
          <div className="overlay__background" onClick={onClose} />
          <div className="tarefa__container">
            <div className="tarefa__control">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Criar tarefa</h2>
                <TextField
                    label="Título"
                    variant="outlined"
                    value={campo1}
                    onChange={handleCampo1Change}
                />

                <br />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Data e Hora"
                  ampm={false}
                  value={selectedDateIn}
                  onChange={(newValue) => setSelectedDate(newValue)}
                />
                </LocalizationProvider>

                <br />

                <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Repetição</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="nao-repetir" control={<Radio />} label="Não repetir" />
                    <FormControlLabel value="diariamente" control={<Radio />} label="Diariamente" />
                    <FormControlLabel value="semanalmente" control={<Radio />} label="Semanalmente" />
                    <FormControlLabel value="mensalmente" control={<Radio />} label="Mensalmente" />
                    <FormControlLabel value="anualmente" control={<Radio />} label="Anualmente" />
                </RadioGroup>
                </FormControl>

                <br />
            
                <TextField
                    label="Descrição"
                    variant="outlined"
                    value={campo2}
                    onChange={handleCampo2Change}
                />

                <br />

                <button
                  className="criar_tarefa"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={teste}
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

export default TarefaTeste;