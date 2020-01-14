import React from 'react'

import { connect } from 'react-redux'

const User = ({ dispatch }) => {
  const AddUser = () => {
    dispatch({
      type: 'ADD_USER',
      data: {
        id: 1,
        name: 'woods',
        age: '42',
      },
    })
  }

  const RemoveUser = () => {
    dispatch({
      type: 'REMOVE_USER',
      id: 1,
    })
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

export default connect()(User)
