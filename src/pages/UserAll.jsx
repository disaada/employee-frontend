import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

function UserAll() {

  const [users, setUsers] = useState([]);

  function getUserAll() {
    axios.get('http://localhost:4000/message', {
      headers: {
        //'X-Requested-With': 'XMLHttpRequest'
        accept: 'application/json'
      }
    }).then(
      (users) => setUsers(users.data),
      (err) => console.log(err)
    )
  }

  useEffect(() => {
    getUserAll()
  }, [])

  return (
    <Fragment>
      {(users.length > 0)
        && users.map(
          (msg, k) => (
            <p key={`$[k]`}> {msg.message} </p>
          )
        )
      }
      {(users.length === 0) && (<p>tidak ada data</p>)}
    </Fragment>
  )
}

export default UserAll
