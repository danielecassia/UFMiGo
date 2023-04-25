import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {
  GridRowModes,
  DataGridPro,
  GridToolbarContainer,
  GridActionsCellItem,
} from '@mui/x-data-grid-pro';
import { randomId } from '@mui/x-data-grid-generator';

import "./Courses.css"

const initialRows = [
  {
    id: randomId(),
    code: "DCC024",
    course: "Linguagens de Programação",
  },
  {
    id: randomId(),
    code: "DCC024",
    course: "Linguagens de Programação",
  },
  {
    id: randomId(),
    code: "DCC024",
    course: "Linguagens de Programação",
  },
  {
    id: randomId(),
    code: "DCC024",
    course: "Linguagens de Programação",
  },
  {
    id: randomId(),
    code: "DCC024",
    course: "Linguagens de Programação",
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, code: '', course: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'code' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function Courses() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { 
        field: 'code',
        headerName: 'Código',
        width: 150,
        editable: false
    },
    {
        field: 'course',
        headerName: 'Disciplina',
        width: 350,
        editable: false
    },
    {
      field: 'absences',
      headerName: 'Faltas',
      type: 'actions',
      width: 180,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<AddIcon />}
            label="Adicionar"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<RemoveIcon />}
            label="Remover"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Excluir',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Excluir"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div className="outlet">
        <div classname="table">
            <h2>Disciplinas</h2>
            <div className="main-table">
                <Box
                  sx={{
                    height: 500,
                    width: '100%',
                    '& .actions': {
                      color: 'text.secondary',
                    },
                    '& .textPrimary': {
                      color: 'text.primary',
                    },
                  }}
                >
                  <DataGridPro
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStart={handleRowEditStart}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    sx={{
                        fontSize: '16px'
                    }}
                    // slots={{
                    //   toolbar: EditToolbar,
                    // }}
                    // slotProps={{
                    //  toolbar: { setRows, setRowModesModel },
                    // }}
                  />
                </Box>
            </div>
        </div>
    </div>
  );
}

