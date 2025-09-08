import React, { useState } from "react";
import "./List.css";
import axios from "axios"

const List = () => {
  const url = "http://localhost:4000"
  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}`);
  }
  return (
    <div>
      List
    </div>
  );
};
export default List;

// 5:32:15