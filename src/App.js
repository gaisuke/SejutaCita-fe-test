import * as React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Bookmark from "./pages/Bookmark/Bookmark";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:cat/:id" element={<Detail />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}