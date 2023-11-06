import React from 'react'
import footerLogo from './../assets/images/footerLogo2.png'
import Row from './common/Row'
import { useTheme } from "@mui/material/styles";
import GridWrapper from './common/GridWrapper'
import { Grid, Typography } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MainMenuData from './menu/MainMenuData'
import ContactMenuData from './menu/ContactMenuData'
import SocialMenuData from './menu/SocialMenuData'
import ListMenu from './menu/ListMenu'
import SocialMediaIconList from './menu/SocialMediaIconList';

const Footer = () => {

     const theme = useTheme()

     const FooterStyles = {
      lists:{
        listStyleType:'none'
      }
     }

  return (
    <Row component="footer" sx={{backgroundColor: theme.palette.primary.main}} extraPadding >
      <GridWrapper>
        <Grid container spacing={2}>
          <Grid item xs>
                <img src={footerLogo} />
          </Grid>
           <Grid item xs>
             <Typography variant='h3Light'
             >Quick Links</Typography>
            <ListMenu  Menu={MainMenuData} dense='true'/>
          </Grid>
          <Grid item xs>
              <Typography variant='h3Light'
             >Contact Us</Typography>
                 <ListMenu  Menu={ContactMenuData} dense='true'/>
          </Grid>

          <Grid item xs>
                <Typography variant='h3Light'
             >Follow Us</Typography>
                <SocialMediaIconList  menu={SocialMenuData}/>
                
          </Grid>
        </Grid>
      </GridWrapper>
    </Row>
  )
}

export default Footer