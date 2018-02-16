import React from 'react';

import { Form, Button, Checkbox } from 'semantic-ui-react';

class EditItemForm extends React.Component {

  render() {
    const item = this.props.item;

    return (
      <Form encType="multipart/form-data" onSubmit={this.props.onSubmit}>
        <input 
          name="id" 
          type="hidden" 
          value={item._id} 
          onChange={this.props.onChange}
        />
        <Form.Field>
          <label>Title</label>
          <input 
            name="title" 
            type="text" 
            value={item.title} 
            onChange={this.props.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea 
            name="detail"
            onChange={this.props.onChange}
            value={item.detail}
          >
          </textarea>
        </Form.Field>
        <Form.Field>
          <label>Avatar</label>
          <input name="avatar" type="file" onChange={this.props.onFileChange} />
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
            onChange={this.props.onCheckboxChange}
            id="visible"
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

export default EditItemForm;
