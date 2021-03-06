import React, { Component } from 'react';

import { Form, Button, Checkbox } from 'semantic-ui-react';

import TopBar from '../../../../common/components/TopBar';

export default class EditItemForm extends Component {

  constructor(props){
    super(props)

    this.onFileChange = this.onFileChange.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)

    this.state = {
      files: []
    }
  }

  onFileChange(e) {
    let files = this.state.files;

    let file = files.find((f) => {
      return Object.keys(f)[0] === e.target.name
    });

    if(file === undefined){
      console.log("Adding new file to array..");

      file = {}
      file[e.target.name] = e.target.files[0]

      files.push(file)

    }else{
      console.log("Updating old file in array..");
      file[e.target.name] = e.target.files[0]
      
      let index = files.indexOf(file)
      files[index] = file
    }

    this.setState({ files: files });
  }

  onCheckboxChange(e) {
    /*
    let item = {...this.state.item};
    item[e.target.name] = e.target.checked;
    
    this.setState({ item: item })
    */

    this.props.item[e.target.name] = e.target.checked
    this.forceUpdate();
  }

  onChange(e) {
    /*
    let item = {...this.state.item};
    item[e.target.name] = e.target.value;

    this.setState({
      item: item
    });
    */

    console.log("Changing value to")
    console.log(e.target.value);
    this.props.item[e.target.name] = e.target.value

    console.log(this.props.item);
    this.forceUpdate();
  }

  submit = (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('item', JSON.stringify(this.props.item));

    // Add files
    this.state.files.forEach((file) => {
      let key = Object.keys(file)[0];
      formData.append(key, file[key]);
    });

    // Refer to parent handler
    this.props.submit(formData)
  }


  render() {

    let item = this.props.item;

    return (
      <div>
        <TopBar/>

        <div className="ui page grid">
          <div className="two column row">
            <div className="column">

              <h3>{this.props.title}</h3>

              <Form encType="multipart/form-data" onSubmit={this.submit}>
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
                  <Checkbox slider
                    checked={item.visible}
                    id="visible"
                    name="visible"
                    label="Visible?"
                    onChange={this.onCheckboxChange}
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
