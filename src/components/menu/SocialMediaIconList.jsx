import { Grid } from '@mui/material'
import React from 'react'

const SocialMediaIconList = ({menu}) => {
  return (
    <Grid container spacing={2}>
        {menu.map((item) => {
            return (<Grid key={item.id} item>{item.icon}</Grid>)
        })}
    </Grid>
  )
}

export default SocialMediaIconList