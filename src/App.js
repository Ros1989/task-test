import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Layout/Container';
import AppBar from './components/Navigation/AppBar';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Loader from 'react-loader-spinner';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PrivatePageView = lazy(() => import('./views/PrivatePageView'));

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
          <Suspense
            fallback={
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Loader type="Rings" color="#00BFFF" height={80} width={80} />
              </div>
            }
          >
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
          </Suspense>
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
