import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import Table from "./table";
import Navbar from "./navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="counter" element={<Counter />} />
        <Route path="table" element={<Table />} />
      </Routes>
      {/* <Counter />
      <Login /> */}
    </div>
  );
}

export default App;
