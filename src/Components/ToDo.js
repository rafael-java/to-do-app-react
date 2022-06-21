import React from "react";
import "./Styles.css";

export default function ToDo({ toDo, toggleToDo }) {
 function handleToggleToDo() {
  toggleToDo(toDo.id);
 }

 return (
  <div className="text">
   <div className="row">
    <input
     className="checkbox"
     type="checkbox"
     checked={toDo.complete}
     onChange={handleToggleToDo}
    ></input>
    <div className="space"> </div>
    <div className={toDo.complete ? "checked" : ""}>{toDo.name} </div>
   </div>
  </div>
 );
}
