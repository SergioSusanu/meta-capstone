import React from 'react'
import { Box } from '@mui/material'

const Table = ({table}) => {

  const handleClick = () => {
    console.log(table.id);
  }
  return (
    <Box onClick={handleClick} sx={{
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
  )
}

export default Table