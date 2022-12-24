
import React from 'react'; 
import { useEffect, useState } from 'react';
import './App.css';
//import { Brightness1 } from '@mui/icons-material';

import { MdNightsStay } from "react-icons/md";
import {MdWbSunny} from 'react-icons/md'


const url = 'https://reqres.in/api/users'

function App() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
 const [email, setEmail] = useState('')
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')
 const [theme, setTheme] = useState('light');


  const fetchUsers = async () => {
    const reponse = await fetch(url)
    const newUsers = await reponse.json()
    
    setUsers(newUsers)
    setLoading(false)
    
  }



  const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
    } else {
    setTheme('light');
  }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    let obj = {}
    obj.email = email
    obj.first_name = firstName
    obj.last_name = lastName
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
  };
  await fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => setUsers(data));
  }


  useEffect(() => {
    fetchUsers()
  }, [])


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  else{
    return(
      <div className={`${theme}`}>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        { theme === 'light' ? <MdNightsStay className='icon' onClick={toggleTheme}/> : <MdWbSunny className='icon' onClick={toggleTheme}/> }
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
        <td><img src={avatar}/></td>
        <td>{id}</td>
        <td>{first_name + " " + last_name}</td>
        <td><a href={email}>{email}</a></td>
        </tr>
      )
     
    })}
    <tr>
        <td><button className='addbutton' onClick={handleSubmit}>Add User</button></td>
        <td><input type='text' value={firstName} className='input-field' onChange={(e) => setFirstName(e.target.value)} placeholder='Enter First Name'/></td>
        <td><input type='text' value={lastName} className='input-field' onChange={(e) => setLastName(e.target.value)} placeholder='Enter last Name' /></td>
        <td><input type='email' value={email} className='input-field' onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'/></td>
    </tr>
    </table>
    </div>
    </div>
    )
  }
  
}

export default App