import React, { useState, useEffect } from "react";

export const Userslist = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const resultJSON = await usersList.json();
      setUsers(resultJSON);
    };
    fetchUsers();
  }, []);

  const usersData = users
    .filter((user) => {
      return user.name.indexOf(term) >= 0;
    })
    .map((item, index) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
        </div>
      );
    });

  return (
    <div>
      <span>UsersList</span>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {usersData}
    </div>
  );
};
