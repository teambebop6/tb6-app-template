/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

import TopBar from '../../common/components/TopBar';

const axios = require('axios');

export default class Add extends Component {
  state = {
    item: {
      _id: '',
      title: '',
      detail: '',
      visible: false
    }
  };

  componentDidMount() {
    
      axios.get(`/api/admin/crudTemplate/item/${this.props.match.params.id}`)
        .then(response => {
          console.log(response.data);
          this.setState({item: response.data})
        })
  }

  render() {

    const item = this.state.item || {}

    return (
      <div>
        <TopBar/>

        <div className="ui page grid">
          <div className="two column row">
            <div className="column">

              <h3>Modify element</h3>

              <Form encType="multipart/form-data" method="post" action="/api/admin/add">
                <Form.Field>
                  <input name="id" type="hidden" value={item._id} />
                </Form.Field>
                <Form.Field>
                  <label>Title</label>
                  <input name="title" type="text" value={item.title} />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <textarea name="detail" value={item.detail}></textarea>
                </Form.Field>
                <Form.Field>
                  <label>Avatar</label>
                  <input name="avatar" type="file" />
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
                  <input id="item-visible" type="hidden" value={item.visible} />
                  <Checkbox label='Visible?' />
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
