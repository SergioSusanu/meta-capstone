import { Box } from '@mui/material'
import React, {useEffect} from 'react'
import Row from '../common/Row'
import Seats from './SeatsData'
import CircleIcon from '@mui/icons-material/Circle';
import Table from './Table'
import { Link } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
import Tables from '../../data/TableData';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme } from "@mui/material/styles";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const TablesMap = () => {
   const tableMapStyles={
    display: 'grid',
    gridTemplateColumns: 'repeat(23, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    border:'1px solid darkgray',
    height:'360px',
  }

  const theme = useTheme()

  const styles={
    width: '810px',
    marginLeft:'auto',
    marginRight:'auto',
  }

  const legendStyles={
    display:'flex',

  }

  return (
    <Row>
      <Box sx={styles}>
        <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
          <Box sx={legendStyles}><CheckBoxIcon sx={{color:'darkgray'}}/>Not Available</Box>
          <Box sx={legendStyles}><CheckBoxIcon color='secondary'/>Available</Box>
          <Box sx={legendStyles}><CheckBoxIcon color='primary'/> Selected</Box>
        </Box>
        <Box sx={tableMapStyles}>
          {Tables.map((table)=>{
            return <Table key={table.id} table={table}></Table>
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
              <CircleIcon sx={{color:'lightgray', fontSize:'16px'}} />
            </Box>
          })}
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
          <Link to='/reservations'><CommonButton aria-label='reserve table'>
            <KeyboardArrowLeftIcon/>Go Back</CommonButton></Link>
          <Link to='/reservation-success'><CommonButton aria-label='reserve table'>Confirm
          <KeyboardArrowRightIcon fontSize='small'/></CommonButton></Link>
        </Box>
      </Box>

    </Row>
  )
}

export default TablesMap