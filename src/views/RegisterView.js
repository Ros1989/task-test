import React, { Component } from 'react';
import Section from '../components/Layout/Section';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Section title="Fill the form">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="inputWrapper">
            <label className="label" htmlFor="name"></label>
            <input
              className="input"
              type="name"
              name="name"
              value={name}
              placeholder="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="inputWrapper">
            <label className="label" htmlFor="email"></label>
            <input
              className="input"
              type="email"
              name="email"
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
              value={password}
              minLength="7"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button className="button" type="submit">
            Registration
          </button>
        </form>
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
