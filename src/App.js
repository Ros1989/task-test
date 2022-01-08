import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Layout/Container';
import AppBar from './components/Navigation/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  //логика для рефреша
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/register" component={RegisterView} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);