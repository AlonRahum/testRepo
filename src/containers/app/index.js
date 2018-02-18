import React from 'react';
//import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import DrawerMenu from './components/DrawerMenu'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';
import * as selectors from './selectors';
import Home from '../home';
//import SignIn from '../signIn';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Header onMenuClick={this.props.toggleDrawer} />
        <DrawerMenu isOpen={this.props.isDrawerOpen} toggleDrawer={this.props.toggleDrawer}/>
        <Home/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: selectors.getIsLoading(state),
    isDrawerOpen: selectors.getIsDrawerOpen(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleDrawer: Actions.toggleDrawer }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
