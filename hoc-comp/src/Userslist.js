import React, { useState, useEffect } from "react";

export const Userslist = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
    };
    fetchUsers();
  }, []);
  return <div>USerslist</div>;
};
