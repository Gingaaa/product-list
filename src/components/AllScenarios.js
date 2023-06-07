import React, { useState, useEffect } from "react";
import plus from "../assets/images/plus.png";
import edit from "../assets/images/pen.png";
import del from "../assets/images/trash.png";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function AllScenarios() {
  const [data,setData] = useState([]);
  const [count,setCount] = useState(0);

  

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [data]);

  const deleteall = () => {
    for(let i=1; i<= count;i++){
      axios.delete(`http://localhost:3001/scenario/${i}`)
        .then(response => {
          // console.log('All data deleted successfully:', response.data);
        })
        .catch(error => {
          // console.error('Error deleting data:', error);
        });
    }
  };

  const deletes = (id) => {
      axios.delete(`http://localhost:3001/scenario/${id}`)
        .then(response => {
          // console.log('All data deleted successfully:', response.data);
        })
        .catch(error => {
          // console.error('Error deleting data:', error);
        });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/scenario');
      setData(response.data);
      // console.log(response.data);
      setCount(response.data.length);
    } catch (error) {
      // console.log(error);
    }
  };


  return (
    <>
      <div>
        <div className="allsc">
          <div>
            <h1>All Scenarios</h1>
          </div>
          <div className="allbtn">
            <Link to="/addscenario"><button className="btn1all">New Scenario</button></Link>
            <button className="btn2all">Add Vehicle</button>
            <button className="btn3all" onClick={deleteall}>Delete All</button>
          </div>
        </div>
        <table className="allli">
          <thead className="alltop">
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicles</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="alltos">

          {data.map((item) => (
          <tr key={item.id} style={{borderBottom:'1px solid black'}}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.time}</td>
            <td>{item.time}</td>
            <td>
                {" "}
                <img src={plus} className="plus" alt="" />
              </td>
              <td>
                {" "}
                <img src={edit} className="edit" alt="" />
              </td>
              <td>
                {" "}
                <img src={del} className="del" alt="" onClick={()=>deletes(item.id)} />
              </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
