import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { loginActionCreater } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './login.css';


class LoginComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "zafarn8@gmail.com",
      password: "abc123"
    };
    this.handleChange = this.handleChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log('values..', event.target.value);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginActionCreater(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginActionCreater }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginComponent);