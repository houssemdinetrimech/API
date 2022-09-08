import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import UserList from "./Components/UserList";


function App() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          
          console.log(response)
          setUser(response.data);
        })
        .catch(function (error) {
         
          console.log(error);
          setError(error);
        })
  }, []);
  

  return (
    <div className="App">
      <h1> User List</h1>
      {<UserList user={user}/>}
      {error}

      
    </div>
  );
}

export default App;