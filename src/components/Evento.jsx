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
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export function Evento({ isOpen, onClose, children, selectedDate}) {
  // Use o estado para controlar os valores dos campos de texto
  const [campo1, setCampo1] = useState('');

  const [campo2, setCampo2] = useState('');

  const [campo3, setCampo3] = useState('');

  const [campo4, setCampo4] = useState('');

  const [campo5, setCampo5] = useState('');

  const [campo6, setCampo6] = useState('');

  const [selectedDateIn1, setSelectedDate1] = useState(selectedDate);

  const [selectedDateIn2, setSelectedDate2] = useState(selectedDate);

  const [value, setValue] = React.useState('nao-repetir');

  const [selectedTimeIn, setSelectedTime] = React.useState(dayjs('2022-04-17T15:30'));

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

  const handleCampo3Change = (event) => {
    setCampo3(event.target.value);
  };

  const handleCampo4Change = (event) => {
    setCampo4(event.target.value);
  };

  const handleCampo5Change = (event) => {
    setCampo5(event.target.value);
  };

  const handleCampo6Change = (event) => {
    setCampo6(event.target.value);
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    console.log(date)
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    console.log(date)
  };

  return (
    <Fragment>
      {isOpen && (
        <div className='overlay'>
          <div className="overlay__background" onClick={onClose} />
          <div className="evento_reuniao__container">
            <div className="evento_reuniao__control">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Criar evento</h2>
                <DateTimePicker
                  label="Data e Hora de Início"
                  value={selectedDateIn1}
                  onChange={(newValue) => setSelectedDate1(newValue)}
                />

                <br />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Controlled picker"
                  value={selectedDateIn2}
                  onChange={(newValue) => setSelectedDate2(newValue)}
                />
                </LocalizationProvider>

                <br />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Data e Hora de Início"
                        value={selectedDateIn2}
                        onChange={handleDateChange2}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <br />
            
                <TextField
                    label="Descrição"
                    variant="outlined"
                    value={campo3}
                    onChange={handleCampo3Change}
                />

                <br />

                <TextField
                    label="Convidados"
                    variant="outlined"
                    value={campo4}
                    onChange={handleCampo4Change}
                />

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

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker
                      label="Horário do lembrete"
                      ampm={false}
                      format='HH:mm'
                      value={selectedTimeIn}
                      onChange={(newValue) => setSelectedTime(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>

                <br />

                <TextField
                    label="Videoconferência"
                    variant="outlined"
                    value={campo6}
                    onChange={handleCampo6Change}
                />

                <br />

                <button
                  className="criar_evento"
                  type="button"
                  style={{marginBottom: '10px'}}
                  onClick={onClose}
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

export default Evento;