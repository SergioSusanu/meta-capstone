import React from 'react'
import StarIcon from './../assets/images/star.svg'
import { Card, Grid } from '@mui/material';

const TestimonialCard = ({data}) => {

  let Stars =[];

  for (let index = 0; index < data.rating; index++) {
    Stars.push(<img src={StarIcon} />)
  }

  const TestimonialCardStyles = {
    Card:{
      height:'100%'
    },
    CardGrid:{
       height:'100%',
    }
  }

  return (
    <Grid item  xs={12} sm={6} lg={3}>
      <Card sx={TestimonialCardStyles.Card}>
        <Grid container sx={TestimonialCardStyles.CardGrid} direction='column'>
            <Grid item>
               <img src={data.img} alt={data.name} width="150px" height="150px"/>
            </Grid>
            <Grid item>
               {data.name}
            </Grid>
            <Grid item>
                {Stars}
            </Grid>
            <Grid item xs>
                {data.description}
            </Grid>
        </Grid>
      </Card>
    </Grid>
    // <article className='testimonial-card'>
    //    <img src={data.img} alt={data.name} width="150px" height="150px"/>
    //    <div className='testimonial-info'>
    //         <div className='testimonial-meta'>
    //             <h3 className='lead-text primary-green'>{data.name}</h3>
    //             <div className='rating-container'>
    //               {Stars}
    //             </div>
    //         </div>
    //         <p className=' primary-green'>"{data.description}"</p>
    //    </div>
    // </article>
  )
}

export default TestimonialCard