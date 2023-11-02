import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function FoodItemCardMui({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.img}
      />
      <CardContent>

     <Box className='food-item-info'>
            <Box className='food-item-meta'>
                <Typography variant='h3'>{data.name}</Typography>
                
                <span  className='secondary-peach'>${data.price}</span>
            </Box>
            <div><p  className='primary-green'>{data.description}</p></div>
     </Box>

        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.description}
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small">Order a delivery</Button>
      </CardActions>
    </Card>
  );
}