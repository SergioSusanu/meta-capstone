import { Box } from '@mui/material'
import React from 'react'
import Row from '../common/Row'
import Tables from './TableData'


const TablesMap = () => {
   const tableMapStyles={
    display: 'grid',
    gridTemplateColumns: 'repeat(23, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    backgroundColor: 'lightgray',
    width: '810px',
    height:'360px',
    marginLeft:'auto',
    marginRight:'auto',
  }

  const tableStyle = {
    backgroundColor: 'darkgray',
    gridColumn: '1 / span 3',
    gridRow:'2 / span 1'
  }

  return (
    <Row>
      <Box sx={tableMapStyles}>
        {Tables.map((table)=>{
          return <Box sx={{
            backgroundColor:'darkgray',
            gridColumn: `${table.colStart} / span ${table.colSpan}`,
            gridRow:`${table.rowStart} / span ${table.rowSpan}`,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: table.borderRadius || '0px'
          }}
             key={table.id}>
              {table.caption || table.id}
             </Box>
        })}
      </Box>
    </Row>
  )
}

export default TablesMap