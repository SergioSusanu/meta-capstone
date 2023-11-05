import React, {useContext} from 'react'
import SpecialsData from '../data/SpecialsData'
import CommonButton from './common/CommonButton';
import FoodItemCardMui2 from './FoodItemCardMui2';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import GridWrapper from './common/GridWrapper';
import Row from './common/Row';

const Specials = () => {

   const FoodItems = SpecialsData();
   const theme = useTheme()

   const FoodItemsStyles = {
     rowSpacing:1,
     justifyContent:"space-between",
     columnSpacing:1,

   }

  return (
           <Row>
            <GridWrapper>
                <Row sx={{display:'flex', justifyContent:'space-between'}}>
                     <Typography variant='h2' className='primary-green'>This week's specials</Typography>
                    <CommonButton>Online Menu</CommonButton>
                </Row>
                <Row>
                    <Grid container spacing={2}>
                        {FoodItems.map((item) => {
                            return <FoodItemCardMui2 key={item.id} data={item} />
                        })}
                    </Grid>
                </Row>
            </GridWrapper>
            </Row>
  )
}

export default Specials