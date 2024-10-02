import React from 'react'
import UserList from './components/UserList'
import AxiosUserList from './components/AxiosUserList'

// import ReusableButton from './components/ReuseableButton'

const App = () => {
  const users = ["Jake", "Sally", "Sarah"]

  return (
    <div>

      {/* We can pass through users as an argument to the user list component */}
      {/* This works because it will be read as props.users */}
      {/* <UserList users={users}/> */}

      {/* If we change the name of the users parameter to something else, like user, 
      it will not work and display the default values 
       */}
       {/* <UserList user={users} /> */}
       <AxiosUserList />
    </div>
  )
}

export default App