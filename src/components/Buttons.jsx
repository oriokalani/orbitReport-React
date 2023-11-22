import React from "react";
import satData from "./satData";

//TODO: Should I make this into a named function?
export const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => 
        <button onClick = {() => filterByType(sat)} key = {id} >
          {sat} Orbit
        </button>
      )}

      <button onClick = {() => setSat(satData)}
      >All Orbits</button>
      
    </div>
  );
};