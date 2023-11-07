import React from 'react'
import RestFoodImg from './../assets/images/restauranfood.png'
import CommonButton from './common/CommonButton'
import GridWrapper from './common/GridWrapper'
import { Box, Grid, Typography } from '@mui/material'
import { useTheme } from "@mui/material/styles";
import MainTitle from './common/MainTitle'
import Row from './common/Row'
import { Link } from 'react-router-dom'

const Hero = () => {
  const theme = useTheme()

  const HeroStyles= {
    left:{
      display:'flex',
      flexDirection:'column',
      alignItems:'start',
      justifyContent:'center',
      gap: theme.spacing(5),
      py:theme.spacing(1)
    },
    right:{
      justifyContent:{xs:'center', sm:'end'},
      display:'flex',
      py:theme.spacing(1)
    }
  }

  return (
    <Row component='section' sx={{backgroundColor: theme.palette.primary.main}} extraPadding>
      <GridWrapper>
            <Grid container >
              <Grid item xs={12} sm={6} sx={HeroStyles.left}>
                  <MainTitle title='Little Lemon' subTitle='Chicago' titleComponent='h1' subtitleComponent='h2' titleTheme='light'/>
                  <Typography sx={{color:theme.palette.lightGray}} variant='leadText'>We are a family owned Mediterranean 
                  restaurant focused on traditional recipes served with a modern twist.</Typography>
                  <Link to='/reservations'><CommonButton>Reserve a table</CommonButton></Link>
              </Grid>
              <Grid item xs={12} sm={6} sx={HeroStyles.right}>
                  <img src={RestFoodImg}  maxWidth="364px" 
                  alt="Waiter with fresh made Bruschetta's" />
              </Grid>
            </Grid>
          </GridWrapper>
    </Row>
  )
}

export default Hero