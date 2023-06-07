import React from "react";
import edit from '../assets/images/pen.png';
import del from '../assets/images/trash.png';


export default function Home() {
  return (
    <>
      <div>
        <div className="hobox">
          <h2>Scenario</h2>
          <select className="textvh">
            <option value="grapefruit">Test Scenario</option>
            <option value="lime">My Scenario</option>
          </select>
        </div>
        <table className="allli">
          <thead  className="alltop">
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody  className="alltos">
            <tr>
              <td>1</td>
              <td>Bus</td>
              <td>30</td>
              <td>215</td>
              <td>3</td>
              <td>Towards</td>
              <td> <img src={edit} className="edit" alt="" /></td>
              <td> <img src={del} className="del" alt="" /></td>
            </tr>
          </tbody>
        </table>
        <div className="hobtn">
            <button className="btn2ho">Stop Simulation</button>
            <button className="btn1ho">Start Simulation</button>
          </div>
        {/* <div className="vhmove"> */}
        <table className="vhli">
          {/* <thead  className="alltop">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead> */}
          <tbody  className="allvh">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}
        <div>
            <span className="vhscene1">1</span>
            <span className="vhscene2">2</span>
            <span className="vhscene3">3</span>
            <span className="vhscene4">4</span>
            <span className="vhscene5">5</span>
            <span className="vhscene6">6</span>
            <span className="vhscene7">7</span>
            <span className="vhscene8">8</span>
        </div>
      </div>
    </>
  );
}
