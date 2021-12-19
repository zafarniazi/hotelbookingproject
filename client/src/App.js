import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
        </Routes>
        <Routes>
          <Route
            path="/book/:id/:fromdate/:todate"
            element={<Bookingscreen />}
          />
        </Routes>
        <Routes>
          <Route path="/register" element={<Registerscreen />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Loginscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
