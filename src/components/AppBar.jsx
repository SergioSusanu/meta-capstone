import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from "@mui/material/styles";
import Logo from './../assets/images/Logo.svg'
import MainMenuData from './menu/MainMenuData'
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}>
        <Toolbar disableGutters sx={{backgroundColor:'#ffffff'}}>

          {/* DESKTOP */}
          <Link to='/'><img src={Logo} /></Link>

          {/* DESKTOP MENU */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'end' }}>
            {MainMenuData.map((page) => (
              <Button href={page.link}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: theme.palette.primary.main, display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color={theme.palette.primary.main}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MainMenuData.map((page) => (
                <Link style={theme.links} to={page.link}  key={page.id}> 
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    {page.title}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
