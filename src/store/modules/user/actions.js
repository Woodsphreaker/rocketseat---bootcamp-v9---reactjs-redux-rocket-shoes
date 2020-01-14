const addUser = data => ({
  type: '@user/ADD',
  data,
})

const removeUser = id => ({
  type: '@user/REMOVE',
  id,
})

export { addUser, removeUser }
