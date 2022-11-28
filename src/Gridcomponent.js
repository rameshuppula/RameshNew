import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const Gridcomponent = () => {
  const [data, setData] = useState([""]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/todos")
      .then((res) => setData(res.data.data));
  }, []);
console.log(data)
  return (
    <div>
      
<div className="grid">
{
    data.slice(0,9).map((items)=>
   
    <ul className="grid-item">
          <li>{items.id}</li>
        <li>{items.user_id}</li>
        <li>{items.title}</li>
        </ul>
    )
}
</div>




    </div>
  );
};
export default Gridcomponent;
