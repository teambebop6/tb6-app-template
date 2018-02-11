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
        <div>
          <h1>yeah</h1>
        </div>
        )
  }
}
