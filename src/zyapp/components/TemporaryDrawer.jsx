import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Person2Icon from '@mui/icons-material/Person2';
import MovingIcon from '@mui/icons-material/Moving';

export const TemporaryDrawer = ({ text = 'Account'}) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 120 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[<Person2Icon /> , <MailIcon />, <FavoriteIcon /> , <MovingIcon />].map((text) => (
          <ListItem className='center-class' key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button color='white' onClick={toggleDrawer(true)}> { text } </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
