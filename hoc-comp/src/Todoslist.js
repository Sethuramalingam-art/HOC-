import React, { useState, useEffect } from "react";

export const Todoslist = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const todosList = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultJSON = await todosList.json();
      console.log(resultJSON);
      setTodos(resultJSON);
    };
    fetchTodos();
  }, []);

  const resultData = todos
    .slice(0, 10)
    .filter((todoItem, i) => {
      return todoItem.title.indexOf(term) >= 0;
    })
    .map((todoItem, index) => {
      return (
        <div key={index}>
          <span>{todoItem.title}</span>
        </div>
      );
    });
  return (
    <div>
      <span>TodosList</span>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {resultData}
    </div>
  );
};
