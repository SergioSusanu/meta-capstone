import React from 'react'
import RestFoodImg from './../assets/images/restauranfood.png'
import CommonButton from './common/CommonButton'
import GridWrapper from './common/GridWrapper'
import { Box, Grid } from '@mui/material'
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme()

  const HeroStyles= {
    left:{
      display:'flex',
      flexDirection:'column',
      alignItems:'start'
    },
    right:{
      justifyContent:{xs:'center', sm:'end'},
      display:'flex'
    }
  }

  return (
    <Box component='section' sx={{backgroundColor: theme.palette.primary.main}}>
        <GridWrapper>
            <Grid container sx={{py:theme.spacing(2)}}>
              <Grid item xs={12} sm={6} sx={HeroStyles.left}>
                  <h1>Little Lemon<br/><span>Chicago</span></h1>
                  <p className='light-gray'>We are a family owned Mediterranean<br/> 
                  restaurant focused on traditional<br/> recipes served with a modern twist.</p>
                  <p>
                    {/* <button className='primary-button'>Reserve a table</button> */}
                    <CommonButton>Reserve a table</CommonButton>
                  </p>
              </Grid>
              <Grid item xs={12} sm={6} sx={HeroStyles.right}>
                  <img src={RestFoodImg} height="380px" width="364"
                  alt="Waiter with fresh made Bruschetta's" />
              </Grid>
            </Grid>
        </GridWrapper>
    </Box>
  )
}

export default Hero