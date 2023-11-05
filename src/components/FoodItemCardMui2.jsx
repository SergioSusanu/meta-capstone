import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import MopedIcon from '@mui/icons-material/Moped';

export default function FoodItemCardMui({data}) {

  const theme = useTheme()

  const FoodCardStyles =  {
    Card:{
        backgroundColor: theme.palette.lightGray,
        borderRadius: theme.borderRadius,
        height:'100%',
        // maxWidth:'340px'
    },
    CardImage:{
      height:200,
    },
    CardContent:{
    },
    ItemMeta:{
      display:'flex',
      justifyContent: 'space-between',
    }
  }

  return (
    <Grid item xs={12} sm={6} lg={4}>
        <Card sx={FoodCardStyles.Card}>
            <Grid container sx={{height:'100%'}} direction='column'>
                <Grid item>
                    <CardMedia
                        sx={FoodCardStyles.CardImage}
                        image={data.img}
                      />
                </Grid>
                <Grid item xs container direction='column' sx={{p:theme.spacing(2), gap:theme.spacing(3)}}>
                        <Grid item>
                            <Box sx={FoodCardStyles.ItemMeta}>
                                <Typography variant='h3'>{data.name}</Typography>
                                <Typography sx={{color:theme.palette.secondaryPeach}}>${data.price}</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm sx={FoodCardStyles.CardContent}>
                            <Typography>{data.description}</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="text" endIcon={<MopedIcon />} sx={{fontWeight:'bold'}}>
                                Order a delivery
                            </Button>
                        </Grid>
                </Grid>
            </Grid>
        </Card>
     </Grid>
  )
}