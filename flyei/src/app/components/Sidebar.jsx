import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ComponentListItem from './ComponentListItem';
import AssetsItem from './AssetsItem';
import ChartItem from './ChartItem';
const drawerWidth = 200;
const componentsList = [
  'Sidebar',
  'Accordion',
  'Alert',
  'Alert Dialog',
  'Aspect Ratio',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'Chart',
  'Checkbox',
];

export default function Sidebar() {
  const [componentsOpen, setComponentsOpen] = React.useState(true);

  const handleComponentsClick = () => {
    setComponentsOpen(!componentsOpen);
  };

  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar variant='dense' />
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
      >
        <AssetsItem text="Assets"/>
        <ListItemButton onClick={handleComponentsClick}>
          <ListItemText primary='Components' />
          {componentsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={componentsOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {componentsList.map((component) => (
              <ComponentListItem key={component} text={component} />
            ))}
          </List>
        </Collapse>
        <ChartItem text="Charts"/>
      </List>
    </Drawer>
  );
}
