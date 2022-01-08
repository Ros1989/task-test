import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Layout/Section';
import { authOperations } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    //То что передаем в метод onLogin автоматически при диспатче передаeться в auth-operations (logIn)
    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Section title="Login to your account">
        <div className="wrapper">
          <form onSubmit={this.handleSubmit} className="form">
            <div className="inputWrapper">
              <label className="label" htmlFor="email"></label>
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />
            </div>

            <div className="inputWrapper">
              <label className="label" htmlFor="password"></label>
              <input
                className="input"
                type="password"
                name="password"
                id="password"
                value={password}
                minLength="7"
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>

            <button className="button" type="submit">
              Enter
            </button>
          </form>
        </div>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

// в connect передаем null вместо mapStateToProps
export default connect(null, mapDispatchToProps)(LoginView);
