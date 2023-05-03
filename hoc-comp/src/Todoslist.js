import React, { useState, useEffect } from "react";
import HOC from "./HOC.js";

const Todoslist = ({ data }) => {
  const resultData = data.map((todoItem, index) => {
    return (
      <div key={index}>
        <span>{todoItem.title}</span>
      </div>
    );
  });
  return <div>{resultData}</div>;
};

const SearchTodos = HOC(Todoslist, "todos");

export default SearchTodos;
