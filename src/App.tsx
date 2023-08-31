import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [AllList, setAllList] = useState({});
  return <Navbar />;
}

export default App;
