/**
 * Created by Henry Huang.
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class AdminRouteContainer extends React.Component {
  render() {
    const {
      component: Component,
      ...rest
    } = this.props;
    console.log(this.props);
    const isAuthenticated = localStorage.getItem('admin');
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated
            ? <Component {...props}/>
            : (
              <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }}/>
            )
        }
      />
    )
  }
}

export default AdminRouteContainer;