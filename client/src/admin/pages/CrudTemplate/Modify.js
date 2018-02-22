import React, { Component } from 'react'
import { connect } from 'react-redux';
import EditItemForm from './common/components/EditItemForm'

import { get, post } from '../../../common/helpers/api';

class Modify extends Component {
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

  componentDidMount() {
    get(`/api/admin/crudTemplate/item/${this.props.match.params.id}`, {
      headers: {
        Authorization: this.props.authorization,
      }
    })
      .then(res => {
        console.log("Received item response:");
        console.log(res);

        this.setState({ item: res })
      })
  }

  // Form submit
  submit(formData) {

    let history = this.props.history;

    // Update
    post('/api/admin/crudTemplate/item/' + this.state.item._id, formData, {
      autoHeaders: true,
      Authorization: this.props.authorization,
    })
      .then((res) => {
        if (res.ok) {
          history.push("../");
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <EditItemForm
        item={this.state.item}
        submit={this.submit}
        title="Modify item"
      />
    )
  }

}

const mapStateToProps = state => {
  return {
    authorization: `Bearer ${state.auth.token}`,
  }
};

export default connect(mapStateToProps)(Modify);