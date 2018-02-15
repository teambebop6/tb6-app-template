/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Menu, Grid, Table } from 'semantic-ui-react';


export default class ItemOverview extends Component {
  state = {};

  // ex. '/admin/crudTemplate'
  root = '/admin/crudTemplate'

  render() {
    const { activeItem } = this.state;

    return (
        <Grid className="page">
          <Grid.Row>
            <h3>Schaukasten</h3>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <a class="ui button" href="/admin/showcases/new">Neues Schaukasten-Element erstellen</a>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table fluid>
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
                        <img class="ui mini image" src="/assets/items/{item.avatar.filename}" />
                      )
                    }
                    return 
                  }
                  
                  return (
                    <tr>
                      <td>
                        <Avatar />
                      </td>
                      <td>
                        {item.title} 
                      </td>

                      <td>
                        <div class="ui slider checkbox visible_checkbox">
                          <input type="checkbox" checked={item.visible} data-id={item._id}  />
                          <label></label>
                        </div>
                      </td>
                      <td>
                        <a class="ui icon button" href="{this.root}/modify/{item._id}">
                          <i class="write icon"></i>
                        </a>
                        <button class="ui red icon button remove-item" data-id="{item._id}">
                          <i class="remove icon"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </Table>
          </Grid.Row>
        </Grid>
        )
  }
}
