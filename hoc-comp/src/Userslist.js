import React, { useState, useEffect } from "react";
import HOC from "./HOC.js";

const Userslist = ({ data }) => {
  const usersData = data.map((item, index) => {
    return (
      <div key={item.id}>
        <span>{item.name}</span>
      </div>
    );
  });

  return <div>{usersData}</div>;
};

const SerachUsers = HOC(Userslist, "users");

export default SerachUsers;
