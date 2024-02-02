import { useState } from "react";

import "./App.css";
import Hello from "./Hello";
import Form from "./Form";
import FormDisplay from "./FormDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
function App() {
  //variables
  const [formItem, setFormItem] = useState({ isFilled: false });
  //render
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/form" element={<Form setFormItem={setFormItem} />} />
        <Route path="/display" element={<FormDisplay formItem={formItem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
