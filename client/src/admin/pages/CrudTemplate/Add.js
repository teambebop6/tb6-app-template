import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItemForm from './common/components/EditItemForm';

import { post } from '../../../common/helpers/api';

class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {
      item: {
        '_id': '',
        'title': '',
        'detail': '',
        'visible': false,
        'avatar': null
      }
    };

    this.submit = this.submit.bind(this);
  }

  // Form submit
  submit(formData) {
    let history = this.props.history;

    post('/api/admin/crudTemplate/add', formData, {
      autoHeaders: true,
      headers: {
        Authorization: this.props.authorization,
      }
    })
      .then((res) => {
        if (res.ok) {
          return history.push("./");
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <EditItemForm
        submit={this.submit}
        title="Add item"
        item={this.state.item}
      />
    )
  }

}

const mapStateToProps = state => {
  return {
    authorization: `Bearer ${state.auth.token}`,
  }
};


export default connect(mapStateToProps)(Add);
