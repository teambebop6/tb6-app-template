/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';

import TopBar from '../../common/components/TopBar';

import EditItemForm from './common/components/EditItemForm';

const axios = require('axios');

class Edit extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      item: {
        _id: '',
        title: '',
        detail: '',
        visible: false
      },
      avatarFile: null
    };
  } 

  componentDidMount() {
    if(this.props.match && this.props.match.params.id){
      axios.get(`/api/admin/crudTemplate/item/${this.props.match.params.id}`)
        .then(response => {
          console.log(response.data);
          this.setState({item: response.data})
        })
    }
  }

  onFileChange(e) {
    this.setState({
      avatarFile: e.target.files[0]
    });
  }
  onCheckboxChange(e) {
    let item = {...this.state.item};
    item[e.target.name] = e.target.checked;
    console.log(item);

    this.setState({
      item: item
    });
  }

  onChange(e) {
    let item = {...this.state.item};
    item[e.target.name] = e.target.value;
    console.log(item);

    this.setState({
      item: item
    });
  }

  // Form submit
  submit (e) {
    console.log("Submitting form...")
    e.preventDefault();

    var formData = new FormData();

    formData.append('item', JSON.stringify({...this.state.item}));

    // Add files
    formData.append('avatar', this.state.avatarFile);


    // Send request
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    } 

    // Update or Insert?
    let url = '/api/admin/crudTemplate/add';
    if(this.state.item._id){
      url = '/api/admin/crudTemplate/item/'+this.state.item._id
    }

    let history = this.props.history;

    axios.post(url, formData, config)
      .then(function (response) {
        if(response.status === 200){
          history.push("../");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <TopBar/>

        <div className="ui page grid">
          <div className="two column row">
            <div className="column">

              <h3>
                {
                  this.state.item._id ?
                    "Modify element" :
                    "Create new element"
                }
              </h3>

              <EditItemForm
                item={this.state.item}
                onChange={this.onChange.bind(this)}
                onCheckboxChange={this.onCheckboxChange.bind(this)}
                onFileChange={this.onFileChange.bind(this)}
                onSubmit={this.submit.bind(this)}
              />
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;
