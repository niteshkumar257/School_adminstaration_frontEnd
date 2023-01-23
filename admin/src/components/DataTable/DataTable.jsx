import React from 'react'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




const DataTable = ({rows,columns,rowsPerPageOption,h}) => {
  return (
  <>
  <Box >
      <DataGrid
      sx={{ height:"100vh",width: '99%' }}
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[20]}
      disableColumnMenu
      
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  </>
  )
}

export default DataTable