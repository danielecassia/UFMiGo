
import {
  DataGrid, ptBR
} from '@mui/x-data-grid';
import { useTheme } from "@mui/material";

export function StyledDataGrid(props) {
  const { palette } = useTheme();
  return (
      <DataGrid
          sx={{
              '.MuiDataGrid-columnSeparator': {
                  display: 'none'
              },
              "& .MuiDataGrid-columnHeaders": {
                  color: palette.secondary.main,
                  fontSize: 18,
              },
              '& .MuiDataGrid-row:hover': {
                  backgroundColor: 'white',
              },
              border: 'none',
              paddingLeft: 4,
              paddingRight: 4,
              height: '70vh',
              paddingBottom: 6,

          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          experimentalFeatures={{ newEditingApi: true }}
          disableSelectionOnClick
          {...props}
      />
  )
}