import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { post } from '../../../../../common/helpers/api';

class ListItemRow extends Component {

  constructor(props) {
    super(props);

    this.visibilityChange = this.visibilityChange.bind(this);
  }

  deleteItem = () => {
    this.props.deleteItem(this.props.item)
  }

  visibilityChange(e, data) {
    let item = {
      visible: data.checked
    };

    let formData = new FormData();
    formData.append('item', JSON.stringify(item));

    // Update
    post('/api/admin/crudTemplate/item/' + data.item._id, formData, {
      autoHeaders: true,
      headers: {
        Authorization: this.props.authorization,
      }
    })
      .then((res) => {
        if (res.ok) {
          this.props.item.visible = data.checked;
          this.forceUpdate();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    const item = this.props.item;

    // Avatar block
    function Avatar() {
      if (item.avatar) {
        console.log(item.avatar);
        return (
          <img className="ui mini image" src={"/assets/uploads/items/" + item.avatar.filename} alt="Avatar"/>
        )
      }

      return <div/>
    }

    return (
      <tr>
        <td>
          <Avatar/>
        </td>
        <td>
          {item.title}
        </td>
        <td>
          {item.detail}
        </td>

        <td>
          <Checkbox slider
                    checked={item.visible}
                    item={item}
                    onChange={this.visibilityChange}
          />
        </td>
        <td>
          <Link to={"./modify/" + item._id} className="ui icon button">
            <i className="write icon"></i>
          </Link>

          <Button className="red icon remove-item"
                  onClick={this.deleteItem}
          >
            <i className="remove icon"></i>
          </Button>


        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => {
  return {
    authorization: `Bearer ${state.auth.token}`,
  }
};

export default connect(mapStateToProps)(ListItemRow);
