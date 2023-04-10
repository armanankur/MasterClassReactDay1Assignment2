import React, { useState } from "react";
import styled from "./Data.module.css";

const Data = () => {
  const [value, setValue] = useState({
    element: [],
    event: [],
    time: []
  });
  const currentTime = new Date().toLocaleTimeString();
  const handleMouseOverH1 = () => {
    setValue({
      ...value,
      element: [...value.element, "H1"],
      event: [...value.event, "MOUSEOVER"],
      time: [...value.time, currentTime]
    });
  };

  const handleMouseOutH1 = () => {
    setValue({
      ...value,
      element: [...value.element, "H1"],
      event: [...value.event, "MOUSEOUT"],
      time: [...value.time, currentTime]
    });
  };

  const handleMouseOverH2 = () => {
    setValue({
      ...value,
      element: [...value.element, "H2"],
      event: [...value.event, "MOUSEOVER"],
      time: [...value.time, currentTime]
    });
  };

  const handleMouseOutH2 = () => {
    setValue({
      ...value,
      element: [...value.element, "H2"],
      event: [...value.event, "MOUSEOUT"],
      time: [...value.time, currentTime]
    });
  };

  const handleMouseOverDiv = () => {
    setValue({
      ...value,
      element: [...value.element, "DIV"],
      event: [...value.event, "MOUSEOVER"],
      time: [...value.time, currentTime]
    });
  };

  const handleMouseOutDiv = () => {
    setValue({
      ...value,
      element: [...value.element, "DIV"],
      event: [...value.event, "MOUSEOUT"],
      time: [...value.time, currentTime]
    });
  };
  return (
    <>
      <div className={styled.container}>
        <div className={styled.box}>
          <h1 onMouseOver={handleMouseOverH1} onMouseOut={handleMouseOutH1}>
            H1{" "}
          </h1>
        </div>

        <div className={styled.box}>
          <h2 onMouseOver={handleMouseOverH2} onMouseOut={handleMouseOutH2}>
            H2
          </h2>
        </div>

        <div
          className={styled.box}
          onMouseOver={handleMouseOverDiv}
          onMouseOut={handleMouseOutDiv}
        >
          {" "}
          DIV{" "}
        </div>
      </div>
      <table cellPadding="20px" cellSpacing="5px" border="2px">
        <thead>
          <tr>
            <td>ELEMENT</td>
            <td>EVENT APPLIED</td>
            <td>TIMMING</td>
          </tr>
        </thead>
        <tbody>
          {value.element.map((elementName, index) => (
            <tr key={index}>
              <td>{elementName}</td>
              <td>{value.event[index]}</td>
              <td>{value.time[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Data;
