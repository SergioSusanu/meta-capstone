import React from 'react'
import footerLogo from './../assets/images/footerLogo2.png'
import Location from './../assets/images/icons/location.svg'
import Email from './../assets/images/icons/email.svg'
import Phone from './../assets/images/icons/phone.svg'
import Facebook from './../assets/images/icons/fb.svg'
import Instagram from './../assets/images/icons/insta.svg'
import Twitter from './../assets/images/icons/tw.svg'
import Row from './common/Row'
import { useTheme } from "@mui/material/styles";
import GridWrapper from './common/GridWrapper'
import { Grid } from '@mui/material'

const FooterList = ({children}) => {

   const FooterStyles = {
      lists:{
        listStyleType:'none',
        paddingLeft:0,
        textDecoration:'none',
      }
     }

  return (
    <ul style={FooterStyles.lists}>
      {children}
    </ul>
  )
 }

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
             <p className='lead-text'>Quick Links</p>
                    <FooterList>
                      <li><a href="">Home</a></li>
                       <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                         <li><a href="">Reservations</a></li>
                          <li><a href="">Order Online</a></li>
                          <li><a href="">Login</a></li>
                    </FooterList>
          </Grid>
          <Grid item xs>
             <p className='lead-text'>Contact Us</p>
                    <ul>
                      <li><a href="">
                        <img src={Location} width="14px" height="auto" />
                        &nbsp; 638 Main Ave, Chicago, IL 60631</a></li>
                      <li><a href="">
                         <img src={Phone} width="14px" height="auto"/>
                         &nbsp; (332) 594-2244</a></li>
                      <li><a href="">
                         <img src={Email} width="14px" height="auto"/>
                         &nbsp;
                        sales@littlelemon.com</a></li>
                    </ul>
          </Grid>

          <Grid item xs>
               <p className='lead-text'>Follow Us</p>
                    <div  className='social-info'>
                       <img src={Facebook} width="14px" height="auto"/>
                        <img src={Twitter} width="14px" height="auto"/>
                         <img src={Instagram} width="14px" height="auto"/>
                    </div>
          </Grid>
        </Grid>
      </GridWrapper>
    </Row>
  )
}

export default Footer