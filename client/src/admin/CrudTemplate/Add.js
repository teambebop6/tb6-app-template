/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Form, Checkbox, Button } from 'semantic-ui-react';


export default class Add extends Component {
  state = {
    item: null
  };

  render() {
    const { activeItem } = this.state;

    const item = this.state.item || {}

    return (
      <div class="ui page grid">
        <div class="two column row">
          <div class="column">
            
            <h3>
              {
                item._id ?
                  "Modify element" :
                  "Create new element"
              }
            </h3>
          
            <Form enctype="multipart/form-data" method="post" action="/api/admin/add">
              <input name="id" type="hidden" value={item._id} />
              <Form.Field>
                <label>Title</label>
                <input name="title" type="text" value={item.title} />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <textarea name="detail">{item.detail}</textarea>
              </Form.Field>
              <Form.Field>
                <label>Avatar</label>
                <input name="avatar" type="file" />
                {
                  item.avatar ?
                    (
                      <img 
                        class="ui small image" 
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
    )
  }
}
