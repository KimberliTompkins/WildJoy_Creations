import React, { Component } from 'react';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  async login() {
    this.props.authService.login('/profile');
  }

  render() {
    if( this.props.authState.isPending ) { 
      return (
        <div>Loading authentication...</div>
      );
    } else if( !this.props.authState.isAuthenticated ) { 
      return (
        <div>
          <a onClick={this.login}>Login</a>
        </div>
      );
    }
  }
});