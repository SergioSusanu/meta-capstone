import React from 'react'
import Rating from '@mui/material/Rating';
import { Card, Grid, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const TestimonialCard = ({data}) => {

    const theme = useTheme()

  const TestimonialCardStyles = {
    Card:{
      height:'100%',
      borderRadius:theme.borderRadius
    },
    CardGrid:{
       height:'100%',
       p: theme.spacing(2)
    }
  }

  return (
    <Grid item  xs={12} sm={6} lg={3}>
      <Card sx={TestimonialCardStyles.Card}>
        <Grid container sx={TestimonialCardStyles.CardGrid} direction='column'>
            <Grid item sx={{textAlign:'center'}}>
               <img src={data.img} alt={data.name} width="150px" height="150px"/>
            </Grid>
            <Grid item sx={{textAlign:'center'}}>
               <Typography variant='leadText'>{data.name}</Typography>
            </Grid>
            <Grid item sx={{paddingTop:theme.spacing(2)}}>
                 <Rating name="read-only" value={data.rating} readOnly />
            </Grid>
            <Grid item xs>
                {data.description}
            </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default TestimonialCard