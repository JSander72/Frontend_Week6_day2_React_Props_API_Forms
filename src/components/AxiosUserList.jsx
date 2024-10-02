import React from 'react'
import { useState, useEffect } from 'react'
import ReusableButton from './ReusableButton'
import axios from 'axios'
import '../styles.css'

const AxiosUserList = () => {
  // Initializing the users state with an empty array
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedUserInfo, setSelectedUserInfo] = useState(null)

  const deleteUser = (index) => {
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  const selectUser = (id) => {
    setSelectedUser(id)
    getUserInfo(id)
  }
  const getUserInfo = (id) => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
    .then(response => {
      console.log(response)
      setSelectedUserInfo(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    }
  useEffect(() => {
    axios.get('https://fakestoreapi.com/users/')
    .then(response => {

        console.log(response)

        setUsers(response.data)
    } )
    .catch(error => {
        console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>List of Users</h1>

      { selectedUser && 
        <div>
          <h3>Selected User</h3>
          <p>{selectedUser}</p>
        </div>
      }

      { selectedUserInfo && 
        <div  className='card'>
            <h3>Selected User</h3>
            <p>{selectedUserInfo.name.firstname}</p>
            <p>{selectedUserInfo.name.lastname}</p>
            <p>{selectedUserInfo.name.email}</p>
        </div>
      }

      <h3>Users</h3>

      { users.map((user, index) => 
        <div key={index}>
          <p>{user.name.firstname}</p>

          <ReusableButton handleClick={() => deleteUser(index)} title="Delete User"/>
          <br />
          <ReusableButton handleClick={() => selectUser(user.id)} title="Select User"/>
          <button onClick={() => setSelectedUser(user.id)}>Third Button</button>  

        </div>
      )}
    </div>
  )
}

export default AxiosUserList