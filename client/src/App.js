import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminRouteContainer from './common/container/AdminRouteContainer';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <main style={{
        height: '100%'
      }}>
        <Switch>
          {
            routes.map((route, index) => {
              if (route.admin) {
                return <AdminRouteContainer
                  key={String(index)}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />;
              } else {
                return <Route
                  key={String(index)}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              }
            })
          }
        </Switch>
      </main>
    );
  }
}

export default App;
