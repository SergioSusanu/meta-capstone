import React, {useState, useEffect} from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {select, unSelect} from '../../features/tablesSlice'

const Table = ({table}) => {
  const selectedTable = useSelector((state)=>state.tables.selected)
  const TablesStatuses = useSelector((state)=>state.tables.TablesStatuses)
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   // console.log("selected ",TablesStatuses);
  //     // setSelected(selectedTable === table.id)
  // }, [selectedTable])

  const handleClick = () => {
    if (TablesStatuses[table.id] === 1) {

      // table is available -> selected
      dispatch(select(table.id))
    }
   else if (TablesStatuses[table.id] === 2) {
      // table is selected -> available
      dispatch(unSelect(table.id))
   }
  }

  const backColor = () => {
    switch(TablesStatuses[table.id]) {
  case 1:
    // code block
    return 'yellow'
  case 0:
    // code block
    return 'darkgray'
  case 2:
    // code block
    return 'green'
  default:
    // code block
     return 'lightgray'
}
  }
  return (
    <Box onClick={handleClick} sx={{
            backgroundColor: backColor,
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