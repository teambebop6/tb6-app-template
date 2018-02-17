/**
 * tb6
 * basic crud template
 */
import React, { Component } from 'react';
import { Button, Checkbox, Grid, Table } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import TopBar from '../../common/components/TopBar';
import { get } from '../../helpers/api';

export default class List extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    get('/api/admin/crudTemplate/')
      .then((data) => {
        console.log(data);
        this.setState({ items: data })
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
              <Link className="ui button" to="./add">Create new element</Link>
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
                    if (item.avatar) {
                      return (
                        <img className="ui mini image" src="/assets/items/{item.avatar.filename}" alt="Avatar"/>
                      )
                    }

                    return <div/>
                  }

                  return (
                    <tr key={item._id}>
                      <td>
                        <Avatar/>
                      </td>
                      <td>
                        {item.title}
                      </td>

                      <td>
                        <Checkbox slider
                                  checked={item.visible}
                                  data-id={item._id}
                                  className="visible_checkbox"
                        />
                      </td>
                      <td>
                        <Link to={"./modify/" + item._id} className="ui icon button">
                          <i className="write icon"></i>
                        </Link>
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
