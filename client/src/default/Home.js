/**
 * Created by Henry Huang.
 */
import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TopBar from '../common/TopBar/TopBar';
import { Button } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <Button onClick={() => this.props.changePage('/admin')}>
          Admin
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (path) => push(path || '/login')
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home)
