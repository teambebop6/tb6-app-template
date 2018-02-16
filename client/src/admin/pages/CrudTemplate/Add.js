/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';

import TopBar from '../../common/components/TopBar';

const axios = require('axios');

class Add extends Component {

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
    this.onChange = this.onChange.bind(this)
    this.onChange = this.onChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
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

    let history = this.props.history;

    axios.post('/api/admin/crudTemplate/add', formData, config)
      .then(function (response) {
        if(response.status === 200){
          history.push("./");
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {

    let item = this.state.item;

    return (
      <div>
        <TopBar/>

        <div className="ui page grid">
          <div className="two column row">
            <div className="column">

              <h3>
                {
                  item._id ?
                    "Modify element" :
                    "Create new element"
                }
              </h3>

              <Form encType="multipart/form-data" onSubmit={this.submit.bind(this)}>
                <input 
                  name="id" 
                  type="hidden" 
                  value={item._id} 
                  onChange={this.onChange}
                />
                <Form.Field>
                  <label>Title</label>
                  <input 
                    name="title" 
                    type="text" 
                    value={item.title} 
                    onChange={this.onChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <textarea 
                    name="detail"
                    onChange={this.onChange}
                    value={item.detail}
                  >
                  </textarea>
                </Form.Field>
                <Form.Field>
                  <label>Avatar</label>
                  <input name="avatar" type="file" onChange={this.onFileChange} />
                  {
                    item.avatar ?
                      (
                        <img 
                          className="ui small image" 
                          src="/assets/images/{item.avatar.filename}"
                          alt="item avatar"
                        /> 
                      ) : ""
                  }
                </Form.Field>
                <Form.Field>
                  <input 
                    id="item-visible" 
                    type="hidden" 
                    value={item.visible}
                  />
                  <Checkbox 
                    label='Visible?'
                    name='visible'
                    onChange={this.onCheckboxChange}
                    id="visible"
                  />
                </Form.Field>
                <Button type='submit'>Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Add);
