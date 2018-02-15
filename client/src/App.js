import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminRouteContainer from './common/components/AdminRouteContainer';
import routes from './routes';
import './App.less';

class App extends Component {
  render() {
    return (
      <main>
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
