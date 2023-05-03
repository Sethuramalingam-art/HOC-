import React, { useState, useEffect } from "react";

const HOC = (Wrappedcomponent, entity) => {
  const HocComp = () => {
    const [datas, setDatas] = useState([]);
    const [term, setTerm] = useState("");

    useEffect(() => {
      const fetchDatas = async () => {
        const dataList = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const resultJSON = await dataList.json();
        console.log(resultJSON);
        setDatas(resultJSON);
      };
      fetchDatas();
    });
    const filteredData =
      entity === "users"
        ? datas.filter((item) => {
            return item.name.indexOf(term) >= 0;
          })
        : datas.slice(0, 10).filter((item) => {
            return item.title.indexOf(term) >= 0;
          });
    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Wrappedcomponent data={filteredData}></Wrappedcomponent>
      </div>
    );
  };
  return HocComp;
};

export default HOC;
