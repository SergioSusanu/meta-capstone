import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import MopedIcon from '@mui/icons-material/Moped';

export default function FoodItemCardMui({data}) {

  const theme = useTheme()

  const FoodCardStyles =  {
    Card:{
      borderRadius: theme.borderRadius,
      maxWidth:345,
      backgroundColor: theme.palette.lightGray,
      height:'100%',
      display:'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '1fr',
    },
    CardImage:{
      height:200
    },
    CardContent:{
      paddingBottom:0,
    },
    ItemMeta:{
      display:'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2)
    }
  }

  return (
    <Card component='article' sx={FoodCardStyles.Card}>
      <CardMedia
        sx={FoodCardStyles.CardImage}
        image={data.img}
      />
      <CardContent sx={FoodCardStyles.CardContent}>
        <Box>
            <Box sx={FoodCardStyles.ItemMeta}>
                <Typography variant='h3'>{data.name}</Typography>
                <Typography sx={{color:theme.palette.secondaryPeach}}>${data.price}</Typography>
            </Box>
            <Typography>{data.description}</Typography>
       </Box>
      </CardContent>

      <CardActions>
        <Button variant="text" endIcon={<MopedIcon />}>
          Order a delivery
        </Button>
      </CardActions>
     </Card>
  )
}