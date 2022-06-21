import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { TextField, Button } from "@material-ui/core";

export default function Add() {
 const [text, setText] = useState("");
 const navigate = useNavigate();

 return (
  <>
   <TextField
    label="Text"
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Type your todo here"
    className="input"
    width="100px"
    variant="outlined"
    autoFocus
   />
   <span> </span>

   <Button
    size="small"
    variant="outlined"
    className="button"
    onClick={() => {
     localStorage.setItem("text", JSON.stringify(text));
     navigate("/");
    }}
   >
    Next Page
   </Button>
   {/* <nav style={{ margin: 10 }}>
    <Link to={{ pathname: "/add" }}>
     <button> </button>
    </Link>
   </nav>
   <Link to="/">
    <button> Previous Page</button>
   </Link> */}
  </>
 );
}
