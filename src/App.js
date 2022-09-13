import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/components/Home/Home.jsx"
import  Home  from "../src/components/Home/Home.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
