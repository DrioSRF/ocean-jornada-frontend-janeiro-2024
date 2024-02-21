import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'dataHora', headerName: 'Data e Hora'},
    { field: 'titulo', headerName: 'Titulo', width: 300},
    { field: 'tipo', headerName: 'Tipo'},
    { field: 'repeticao', headerName: 'Repetição', width: 140},
];

const rows = [
    { id: 1, dataHora: '15/02/2023', titulo: 'Limpar Filtros do computador', tipo: 'Tarefa', repeticao: 'Semanalmente' },
    { id: 2, dataHora: '21/02/2023', titulo: 'Reunião de projeto', tipo: 'Reunião', repeticao: 'Sem repetição' },
    { id: 3, dataHora: '22/02/2023', titulo: 'Limpar Filtros do computador', tipo: 'Tarefa', repeticao: 'Semanalmente' },
    { id: 4, dataHora: '25/02/2023', titulo: 'Pebol', tipo: 'Evento', repeticao: 'Sem repetição' },
    { id: 5, dataHora: '28/02/2023', titulo: 'Karaokê do Baguera', tipo: 'Evento', repeticao: 'Sem repetição' },
    { id: 6, dataHora: '05/03/2023', titulo: 'Levar o Soneca no veterinário', tipo: 'Tarefa', repeticao: 'Sem repetição' },
    { id: 7, dataHora: '26/03/2023', titulo: 'Aniversário da Sandra', tipo: 'Evento', repeticao: 'Anualmente' },
];

export default function Visualizar() {
    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </div>
    );
  }