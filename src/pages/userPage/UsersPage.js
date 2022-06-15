import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../../redux/Actions'


function deleteUser(id, removeUser) {
  removeUser({ id })
}

class UsersPage extends Component {

  render() {
    const { removeUser } = this.props
    return (
      <ul>
        {
          this.props.users.map((user) =>
            <li key={user.id} >
              {user.name} <button onClick={() => deleteUser(user.id, removeUser)} > x </button>
            </li>
          )
        }
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeUser: user => dispatch(removeUser(user))
  }
}

const mapSateToProps = state => {
  let { users } = state;
  return { users }
}

export default connect(mapSateToProps, mapDispatchToProps)(UsersPage)
