import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./user/home";
import Signin from "./user/signin";
import Signup from "./user/signup";
import Dashboard from "./user/dashboard copy 2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
