import React, {useState} from 'react'
import ReusableButton from './ReusableButton'

// Functional Component 

// props is short for "properties" that allow you to pass information to a component 
// so the component can display or use that information 
// props = {} 

const UserList = (props) => {
  const [users, setUsers] = useState(props.users)
  const [selectedUser, setSelectedUser] = useState(null)

  const deleteUser = (index) => {
    // Filter method removes users from the list 
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  const selectUser = (index) => {
    setSelectedUser(users[index])
  }

  return (
    <div>

      <h3>Selected User</h3>
      <p>{selectedUser}</p>

      {/* We only want to display the selected user if they exist */}
      {/* We check if there is a selected user and then we display */}
      { selectedUser && 
        <div>
            <h3>Selected User</h3>
            <p>{selectedUser}</p>
        </div>
      }

      <h1>List of Users</h1>
      { users.map((user, index) => 
        <div key={index}>
          <p>{user}</p>

          {/* <button onClick={() => deleteUser(index)}>Delete User</button> */}
          <ReusableButton title='Delete User' handleClick={() => deleteUser(index)}/>

          <br />

          <ReusableButton title='Select User' handleClick={() => selectUser(index)}/>
        </div>
      )}

    </div>
  )
}

UserList.defaultProps = {
  users: ["Jake Default", "Sally Default", "Sarah Default"]
}

export default UserList
