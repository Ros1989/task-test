import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Layout/Container';
import AppBar from './components/Navigation/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PrivatePageView from './views/PrivatePageView';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  // рефреш
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PrivateRoute
              path="/private"
              redirectTo="/login"
              component={PrivatePageView}
            />
            <PublicRoute
              restricted
              path="/register"
              redirectTo="/private"
              component={RegisterView}
            />
            <PublicRoute
              restricted
              path="/login"
              redirectTo="/private"
              component={LoginView}
            />
          </Switch>
        </Container>
      </>
    );
  }
}

//рефреш

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
