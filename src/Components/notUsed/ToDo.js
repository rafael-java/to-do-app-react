import React, { useState, useEffect } from "react";
import "./ToDo.css";
import { Link } from "react-router-dom";

export default function ToDo() {
 const [toDoList, setToDoList] = useState([]);
 const [toDoCount, setToDoCount] = useState("");

 let newDatas = [...toDoList];
 newDatas.push(localStorage.getItem("text"));

 const updateList = (text, toDoList) => {
  console.log("0, old todolist:");
  console.log(toDoList.length);
  let newTodos = [];
  if (text.length === 0) {
  } else {
   newTodos = [{ text: text }, ...toDoList];
   console.log("1, updatedTodos:");
   console.log(newTodos);
   localStorage.setItem("list", JSON.stringify(newTodos));
   console.log("2, saved Todos To LocalStorage:");
   console.log(localStorage);
  }
 };

 useEffect(() => {
  updateList(
   JSON.parse(localStorage.getItem("text")) || "",
   // aqui o problema
   JSON.parse(localStorage.getItem("list")) || []
  );
 }, []);

 useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("list")) || [];
  console.log("3, get Todos from Localstorage:");
  console.log(savedTodos);
  setToDoList(savedTodos, ...toDoList);
 }, []);

 console.log("4, save todos to page:");
 console.log(toDoList);

 return (
  <div className="oi">
   <input type="text"></input>
   <span> </span>
   <button> Add todo </button>
   <h3> Todos left: {0}</h3>
   <button> Clear done </button>
   {/* <nav style={{ margin: 10 }}>
    <Link to={{ pathname: "/add", state: toDoList }}>
     <button> Next Page</button>
    </Link>
   </nav> */}
  </div>
 );
}
