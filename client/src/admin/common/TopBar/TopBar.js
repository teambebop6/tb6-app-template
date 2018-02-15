/**
 * Created by Henry Huang.
 */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item
          as={Link}
          to="/"
        >
          Back to Homepage  
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
          as={Link}
          to={"/admin/crudTemplate/"}
        >
          CRUD Template
        </Menu.Item>
      </Menu>
    )
  }
}
