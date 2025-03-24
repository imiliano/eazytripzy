import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import { TemporaryDrawer } from "./TemporaryDrawer";
import { Link as RouterLink } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, xs: 'block', boxSizing: 'border-box'}}>
      <AppBar position="static">
        <Toolbar>

        <AccountCircleIcon />

          <Box sx={{ flexGrow: 1 }}>
            <TemporaryDrawer />
          </Box>

          <Typography variant="h6" sx={{ color:'secondary.main'}}>
            Zy!
          </Typography>

          <Button component={ RouterLink } to= '/auth' color="inherit">
              <LogoutIcon />
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
