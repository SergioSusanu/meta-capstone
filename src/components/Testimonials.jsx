import React from 'react'
import TestimonialsData from '../data/TestimonialsData'
import TestimonialCard from './TestimonialCard';
import GridWrapper from './common/GridWrapper';
import Row from './common/Row';
import { useTheme } from "@mui/material/styles";
import { Grid, Typography } from '@mui/material';



const Testimonials = () => {
    const TestimonialItems = TestimonialsData();
    const theme = useTheme()
  return (
    <Row sx={{backgroundColor: theme.palette.primary.main}} component="section">
        <GridWrapper>
            <Row>
                <Typography variant='h2Light'>What people say about us!</Typography>
            </Row>
            <Row>
                <Grid container>
                    {TestimonialItems.map((item) => {
                        return <TestimonialCard key={item.id} data={item} />
                    })}
                </Grid>
            </Row>

      </GridWrapper>
      </Row>
  )
}

export default Testimonials