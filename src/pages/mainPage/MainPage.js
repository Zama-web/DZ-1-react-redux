import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { addUser } from '../../redux/Actions';


function MainPage() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: ''
  })

  const unique_id = uuid()
  const id = unique_id.slice(0, 4)

  const onSubmit = (e) => {
    e.preventDefault()
    const { name } = user
    dispatch(addUser({ id, name }))

    setUser({
      name: ''
    })
  }

  const onChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <h1>Main Page</h1>

      <input
        type="text"
        onChange={onChangeInput}
        name='name'
        value={user.name}
      />

      <button onClick={onSubmit} > add user </button>
    </div>
  )
}

export default MainPage
