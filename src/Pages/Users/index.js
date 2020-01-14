import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Reducer Actions
import * as UserActions from '../../store/modules/user/actions'

const User = ({ addUser, removeUser, state }) => {
  const AddUser = () => {
    addUser({
      id: 1,
      name: 'woods',
      age: '42',
    })
    // dispatch({
    //   type: 'ADD_USER',
    //   data: {
    //     id: 1,
    //     name: 'woods',
    //     age: '42',
    //   },
    // })
  }

  const RemoveUser = () => {
    // dispatch({
    //   type: 'REMOVE_USER',
    //   id: 1,
    // })
    removeUser(1)
  }

  return (
    <div>
      <h2>Users</h2>
      <button type="button" onClick={AddUser}>
        Add User
      </button>
      <button type="button" onClick={RemoveUser}>
        Remove User
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch)

export default connect(state => ({ state }), mapDispatchToProps)(User)
