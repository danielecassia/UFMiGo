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
        code: "DCC027",
        course: "Computação gráfica",
        absences: 2,
    },
    {
        id: randomId(),
        code: "MAT232",
        course: "Grupos e corpos",
        absences: 1,
    },
    {
        id: randomId(),
        code: "DCC030",
        course: "Recuperação de informação",
        absences: 4,
    },
    {
        id: randomId(),
        code: "DCC603",
        course: "Engenharia de software",
        absences: 0,
    },
    {
        id: randomId(),
        code: "FIS065",
        course: "Fundamentos de mecânica",
        absences: 3,
    },
];

// function EditToolbar(props) {
    //   const { setRows, setRowModesModel } = props;
    // 
        //   const handleClick = () => {
            //     const id = randomId();
            //     setRows((oldRows) => [...oldRows, { id, code: '', course: '', isNew: true }]);
            //     setRowModesModel((oldModel) => ({
                //       ...oldModel,
                //       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'code' },
                //     }));
            //   };
    // 
        //   return (
            //     <GridToolbarContainer>
            //       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
            //         Add record
            //       </Button>
            //     </GridToolbarContainer>
            //   );
    // }
// 
    // EditToolbar.propTypes = {
        //   setRowModesModel: PropTypes.func.isRequired,
        //   setRows: PropTypes.func.isRequired,
        // };

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

    const handleIncreaseClick = (id) => () => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === id ? { ...row, absences: row.absences + 1 } : row,
            ),
        );
    };

    const handleDecreaseClick = (id) => () => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.id === id ? { ...row, absences: row.absences - 1 } : row,
            ),
        );
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
            field: 'increase',
            headerName: '',
            type: 'actions',
            width: 50,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                    icon={<AddIcon />}
                    label="Adicionar"
                    onClick={handleIncreaseClick(id)}
                    color="inherit"
                    />,
                ];
            },
        },
        {
            field: 'absences',
            headerName: 'Faltas',
            type: 'number',
            width: 60,
            editable: true
        },
        {
            field: 'decrease',
            headerName: '',
            type: 'actions',
            width: 50,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                    icon={<RemoveIcon />}
                    label="Remover"
                    onClick={handleDecreaseClick(id)}
                    color="inherit"
                    />,
                ];
            },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Excluir',
            width: 150,
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
        hideFooterRowCount="True"
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

