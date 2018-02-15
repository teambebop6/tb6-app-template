/**
 * Created by Henry Huang.
 */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { authenticate } from '../../modules/auth';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: '',
        password: '',
      }
    };
    this.onChange = (e) => {
      const { value } = this.state;
      value[ e.target.name ] = e.target.value;
      this.setState({
        value,
      })
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.value);
      const { authenticate } = props;
      const { username, password, } = this.state.value;
      authenticate(username, password).then(() => {
        props.changePage('/admin');
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} method={'post'}>
          <input type="text" name={'username'} value={this.state.value.username} onChange={this.onChange}/>
          <input type="password" name={'password'} value={this.state.value.password} onChange={this.onChange}/>
          <button type={'submit'} disabled={this.props.isAuthenticating}> Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  isAuthenticating: state.auth.isAuthenticating,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticate,
  changePage: (path) => push(path),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);