import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/3IsN.gif';

interface HeadingProps {
  variant?: 'default' | 'custom'
}

const appBarStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  borderTop: '10px solid rgba(101, 94, 94, 0.8)',
  borderBottom: '10px solid rgba(101, 94, 94, 0.8)',
  boxShadow: '0 10px 10px rgba(101, 94, 94, 0.8) inset, 0 -10px 10px rgba(101, 94, 94, 0.8) inset',
}

const pages = ['Making Health and Wellness Accessible Worldwide'];
const settings = ['Find A Provider', 'Chat', 'Profile', 'Edit Profile', 'Delete Profile', 'Logout'];

function Heading({ variant = 'default' }: HeadingProps) {
  if (variant === 'custom') {
    return (
      <Container className="custom-container">
        <img className="logo" height="60px" width="60px" src={logo} alt="Custom Logo" />
        <div custom-heading-explore>
          <p className="explore">MAKING HEALTH AND WELLNESS ACCESSIBLE WORLDWIDE <a href="/explore">home</a></p>
        </div>
      </Container>
    );
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ width: '100%', ...appBarStyle }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"

            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img height="60px" width="60px" src={logo} alt="Default Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                if (setting === 'Logout') {
                  return (
                    <NavLink to="/logout" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                }
                if (setting === 'Edit Profile') {
                  return (
                    <NavLink to="/edit" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                }
                if (setting === 'Chat') {
                  return (
                    <NavLink to="/chat" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                }
                if (setting === 'Find A Provider') {
                  return (
                    <NavLink to="/provider" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                }
                if (setting === 'Profile') {
                  return (
                    <NavLink to="/landing" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                }
                if (setting === 'Delete Profile') {
                  return (
                    <NavLink to="/delete" key={setting} className="nav-link">
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </NavLink>
                  )
                } else {
                  return (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  )
                }
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Heading;
