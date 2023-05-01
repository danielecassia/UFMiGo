import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Stack
} from '@mui/material';
import {StyledDataGrid} from '../../utils/components/StyledDataGrid/StyledDataGrid';
import { InfoButton } from '../../utils/components/Buttons/InfoButton';
import {listCoursebyUsuer} from '../../utils/requests/Courses/listCoursebyUsuer';

const columns = [
  {
    field: 'codigo',
    headerName: 'Código',
    flex: 1,
  },
  {
    field: 'nome',
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

export function Courses() {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const rowsBack = await listCoursebyUsuer();
        setRows(rowsBack);
      } catch (err) {
        // alertError(err);
        console.log(err);
      }
    };
    fetch();
  }, []);

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