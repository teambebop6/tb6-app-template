/**
 * Created by Henry Huang.
 */
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../../res/images/logo.svg';
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
          <img src={Logo} alt="Logo"/>
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/"
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}
