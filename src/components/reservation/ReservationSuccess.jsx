import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InnerPageHeader from '../common/InnerPageHeader'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GridWrapper from '../common/GridWrapper'
import Row from '../common/Row';
import { useTheme } from "@mui/material/styles";

const ReservationSuccess = () => {
    const theme = useTheme()
  return (
     <Box>
      <InnerPageHeader>Thank You!</InnerPageHeader>
      <Row>
        <GridWrapper>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <CheckCircleIcon fontSize="large" 
                    color='primary'
                    />
                </Grid>
                <Grid item>
                    <Typography variant='h3' align='center'>Your request is pending. Our event manager will contact you shortly for confirmation.</Typography>
                </Grid>
            </Grid>
        </GridWrapper>
        </Row>
    </Box>
  )
}

export default ReservationSuccess