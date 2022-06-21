import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Route, IndexRoute } from "react-router";

import ToDo from "../ToDo/ToDo";
import Add from "../Add/Add";

const Routs = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<ToDo />} />
    <Route path="add" element={<Add />} />
   </Routes>
  </BrowserRouter>
 );
};

export default Routs;
