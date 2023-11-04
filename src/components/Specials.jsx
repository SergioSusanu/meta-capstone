import React, {useContext} from 'react'
import SpecialsData from '../data/SpecialsData'
import CommonButton from './common/CommonButton';
import FoodItemCardMui from './FoodItemCardMui';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import GridWrapper from './common/GridWrapper';

const Specials = () => {

   const FoodItems = SpecialsData();
   const theme = useTheme()

   const FoodItemsStyles = {
     spacing:1,
     justifyContent:"space-between",

   }

  return (
      <Box component='section' className='specials'>
           <GridWrapper>
                <Box className="row specials-header">
                    <Typography variant='h2' className='primary-green'>This week's specials</Typography>
                    <CommonButton>Online Menu</CommonButton>
                </Box>
                <Grid container {...FoodItemsStyles}>
                    {FoodItems.map((item) => {
                        return <FoodItemCardMui key={item.id} data={item} />
                    })}
                </Grid>
            </GridWrapper>
      </Box>
  )
}

export default Specials