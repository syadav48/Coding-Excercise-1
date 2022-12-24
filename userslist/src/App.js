
import React from 'react'; 
import { useEffect, useState } from 'react';
import './App.css';
const url = 'https://reqres.in/api/users'

function App() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
 

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newUsers = await reponse.json()
    
    setUsers(newUsers)
    setLoading(false)
    
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  else{
    return(
      <>
      <div className='tabler'>
      <table>
      <tr>
        <th></th>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    
    {users.data.map((user, index) => {
      const {id, email, first_name, last_name, avatar} = user
      return(
        <tr key={index}>
        <th><img src={avatar}/></th>
        <th>{id}</th>
        <th>{first_name + " " + last_name}</th>
        <th><a href={email}>{email}</a></th>
        </tr>
      )
     
    })}
    </table>
    </div>
    <button>Add User</button>
    </>
    )
  }
  
}

export default App