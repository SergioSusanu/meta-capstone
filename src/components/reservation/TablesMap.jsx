import { Box } from '@mui/material'
import React from 'react'
import Row from '../common/Row'
import Tables from './TableData'
import Seats from './SeatsData'
import CircleIcon from '@mui/icons-material/Circle';

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
        {Seats.map((seat)=>{
          return <Box key={seat.id} sx={{
            gridColumn: `${seat.y} / span 1`,
            gridRow:`${seat.x} / span 1`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
          >
            <CircleIcon sx={{color:'darkgray', fontSize:'16px'}} />
          </Box>
        })}
      </Box>
    </Row>
  )
}

export default TablesMap