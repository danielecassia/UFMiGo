import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import {
    Button, Stack
} from '@mui/material';
import {StyledDataGrid} from '../../utils/components/StyledDataGrid/StyledDataGrid';
import { InfoButton } from '../../utils/components/Buttons/InfoButton';

const columns = [
  {
    field: 'codigo',
    headerName: 'Código',
    flex: 1,
  },
  {
    field: 'course',
    headerName: 'Matéria',
    flex: 2,
  },
  {
    field: 'faltas',
    headerName: 'Faltas',
    flex: 1,
  },
  {
    field: 'id', headerName: 'Ações', flex: 1,
    renderCell: (params) => <InfoButton params={params} />
  },
];

const rows = [
    {id:1, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:2, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:3, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:4, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:5, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:6, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:7, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:8, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
    {id:9, codigo: 'DCC024', course:'Linguagem de Programação', faltas:11},
];

export function Courses() {
    const navigate = useNavigate();
  return (
    <div>
        <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            sx={{ marginBottom: 2 }}
        >
            <Button
                variant="contained"
                sx={{ paddingLeft: 10, paddingRight: 10, bgcolor: 'secondary.main'}}
                onClick={() => navigate('./courseRegister')}
            >Cadastrar Matéria</Button>
        </Stack>
        <div sx={{ height: 400}}>
            <StyledDataGrid
                rows={rows}
                columns={columns}
                />
        </div>
    </div>
  );
}