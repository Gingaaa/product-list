import React from "react";

export default function AddVehicle() {
  return (
    <>
      <div>
        <h3>Vehicle / add</h3>
        <h1 style={{ marginTop: "50px" }}>Add Vehicle</h1>
        <div className="addvh">
          <div className="vhbox">
            <h2>Scenario List</h2>
            {/* <input className="textvh" placeholder="Scenario Name" /> */}
              <select  className="textvh">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
          </div>
          <div className="vhbox">
            <h2>Vehicle Name</h2>
            <input type="text" className="textvh" placeholder="Test Scenario" />
          </div>
          <div className="vhbox">
            <h2>Speed</h2>
            <input type="text" className="textvh" placeholder="Test Scenario" />
          </div>
          <div className="vhbox">
            <h2>Position X</h2>
            <input type="text" className="textvh" placeholder="Test Scenario" />
          </div>
          <div className="vhbox">
            <h2>Position Y</h2>
            <input type="text" className="textvh" placeholder="Test Scenario" />
          </div>
          <div className="vhbox">
            <h2>Direction</h2>
            {/* <input className="textvh" placeholder="Test Scenario" /> */}
            <select  className="textvh">
                <option value="grapefruit">Towards</option>
                <option value="lime">Backwards</option>
                <option value="coconut">Upwards</option>
                <option value="mango">Downwards</option>
              </select>
          </div>
        </div>
        <div>
          <button className="btn1add">Add</button>
          <button className="btn2add">Reset</button>
          <button className="btn3add">Go Back</button>
        </div>
      </div>
    </>
  );
}
