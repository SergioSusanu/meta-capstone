import React, {useState, useEffect} from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {select, unSelect} from '../../features/tablesSlice'

const Table = ({table}) => {
  const selectedTable = useSelector((state)=>state.tables.selected)
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
      setSelected(selectedTable === table.id)
  }, [selectedTable])

  const handleClick = () => {
    selected ? dispatch(unSelect()) : dispatch(select(table.id))
  }
  return (
    <Box onClick={handleClick} sx={{
            backgroundColor: selected ? 'green' : 'darkgray',
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