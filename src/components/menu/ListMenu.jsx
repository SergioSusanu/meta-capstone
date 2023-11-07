import React from 'react'
import { useTheme } from "@mui/material/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const ListMenu = ({Menu, dense}) => {

   const theme = useTheme()

 return (
    <List dense={dense}>
      {Menu.map((menuItem) => {
        return (
          <ListItem key={menuItem.id} disableGutters>
            {menuItem.icon ? (<ListItemIcon
              sx={{minWidth:36, color:theme.palette.lightGray}}
            >{menuItem.icon}</ListItemIcon>) : ''}
            <Link to={menuItem.link} style={theme.links}>
              <ListItemText primary={menuItem.title}
                sx={{ color:theme.palette.lightGray}}
              />
             </Link>
          </ListItem>
        )
      })}
    </List>
 )
}

export default ListMenu