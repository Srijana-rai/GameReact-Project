import React, { useState, useEffect } from 'react'

function Asynchronous() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

    async function loadJson() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.status === 200) {
              let data = await response.json();
          setUsers(data);
          setLoading(false);
        }
  }
  useEffect(() => {
    loadJson();
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
          users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))
      )}
      
    </>
  )
}

export default Asynchronous
