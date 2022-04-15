import GoogleBooks from "./components/GoogleBooks";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
       
        <Route path="/googlebooks" element={<GoogleBooks />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}
