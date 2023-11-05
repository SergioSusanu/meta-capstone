import React, {useContext} from 'react'
import SpecialsData from '../data/SpecialsData'
import CommonButton from './common/CommonButton';
import FoodItemCardMui from './FoodItemCardMui';
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

   }

  return (
           <Row>
            <GridWrapper>
                <Row sx={{display:'flex', justifyContent:'space-between'}}>
                     <Typography variant='h2' className='primary-green'>This week's specials</Typography>
                    <CommonButton>Online Menu</CommonButton>
                </Row>
                <Row>
                    <Grid container {...FoodItemsStyles} rowSpacing={3}>
                        {FoodItems.map((item) => {
                            return <FoodItemCardMui key={item.id} data={item} />
                        })}
                    </Grid>
                </Row>
            </GridWrapper>
            </Row>
  )
}

export default Specials