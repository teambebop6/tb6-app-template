/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Grid, Table, Button} from 'semantic-ui-react';

import TopBar from '../../common/components/TopBar';

var axios = require('axios');


export default class List extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios.get(`/api/admin/`)
      .then(response => {
        console.log(response.data);
        this.setState({items: response.data})
      })
  }

  render() {
    return (
      <div>
        <TopBar/>

        <Grid className="page">
          <Grid.Row>
            <h3>Schaukasten</h3>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <a className="ui button" href="./add">Create new element</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table fluid="true">
              <thead>
                <tr>
                  <th width="10%">Bild</th>
                  <th width="25%">Titel</th>
                  <th width="35%">Beschreibung</th>
                  <th width="10%">Sichtbar</th>
                  <th>Aktionen</th>
                </tr>
              </thead>

              <tbody>

                {
                  this.state.items.map((item) => {

                    // Avatar block
                    function Avatar() {
                      if(item.avatar){
                        return (
                          <img className="ui mini image" src="/assets/items/{item.avatar.filename}" alt="Avatar"/>
                        )
                      }

                      return <div/>
                    }

                    return (
                      <tr key={item._id}>
                        <td>
                          <Avatar />
                        </td>
                        <td>
                          {item.title} 
                        </td>

                        <td>
                          <div className="ui slider checkbox visible_checkbox">
                            <input type="checkbox" checked={item.visible} data-id={item._id}  />
                            <label></label>
                          </div>
                        </td>
                        <td>
                          <a className="ui icon button" href="{this.root}/modify/{item._id}">
                            <i className="write icon"></i>
                          </a>
                          <Button className="red icon remove-item" data-id="{item._id}">
                            <i className="remove icon"></i>
                          </Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
