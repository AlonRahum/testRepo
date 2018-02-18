import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './styles/DrawerMenu.css'

export default class DrawerMenu extends React.Component {

  render() {
    return (
        <Drawer
          docked={false}
          width={200}
          open={this.props.isOpen}
          onRequestChange={this.props.toggleDrawer}
        >
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
    );
  }
}