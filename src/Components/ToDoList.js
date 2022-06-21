import React, { useState, useRef, useEffect } from "react";
import "./Styles.css";
import ToDo from "./ToDo";
// import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_LIST_KEY = "toDos";
const LOCAL_STORAGE_ID_KEY = "ids";

export default function ToDoList() {
 const [toDoCount, setToDoCount] = useState("");
 const [toDoList, setToDoList] = useState([]);
 const [ids, setIds] = useState([]);
 const todoNameRef = useRef();

 useEffect(() => {
  const storedToDoList = localStorage.getItem(LOCAL_STORAGE_LIST_KEY);
  if (storedToDoList) setToDoList(JSON.parse(storedToDoList));

  const storedIds = localStorage.getItem(LOCAL_STORAGE_ID_KEY);
  if (storedIds) setIds(JSON.parse(storedIds));
 }, []);

 function getId() {
  let i = 0;
  if (ids.length >= 1) {
   ids.forEach((id) => {
    if (i <= id) {
     i = i + 1;
    }
   });
  }
  const idsCopy = [...ids];
  idsCopy.push(i);
  setIds(idsCopy);
  return i;
 }

 function toggleToDo(id) {
  const newToDoList = [...toDoList];
  const toDo = newToDoList.find((toDo) => toDo.id === id);
  toDo.complete = !toDo.complete;
  setToDoList(newToDoList);
 }

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(toDoList));
  console.log(toDoList);
 }, [toDoList]);

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_ID_KEY, JSON.stringify(ids));
 }, [ids]);

 function handleAddTodo(eventProperty) {
  const name = todoNameRef.current.value;
  if (name === "") return;
  setToDoList((prevTodos) => {
   return [...prevTodos, { id: getId(), name: name, complete: false }];
  });
  todoNameRef.current.value = null;
 }

 function handleClearToDos() {
  const newToDoList = toDoList.filter((toDo) => !toDo.complete);
  setToDoList(newToDoList);
 }

 return (
  <>
   <>
    <div className="nav-container row">
     <div className="column titulo center-flexbox"> My ToDo App </div>
     <div className="column">
      <div className="center-button-navBar">
       <button className="button-clear" onClick={handleClearToDos}>
        Clear done
       </button>
      </div>
     </div>
    </div>
   </>

   <div className="body-container">
    <input
     className="center-margin input"
     ref={todoNameRef}
     type="text"
    ></input>
    <button className="center-margin color-red" onClick={handleAddTodo}>
     Add ToDo
    </button>
    <p className="center-margin bold-text italic-text text">
     Tasks left: {toDoList.filter((toDo) => !toDo.complete).length}
    </p>
    {toDoList.map((toDo) => {
     return <ToDo key={toDo.id} toDo={toDo} toggleToDo={toggleToDo} />;
    })}
    <span> </span>
   </div>
  </>
 );
}
