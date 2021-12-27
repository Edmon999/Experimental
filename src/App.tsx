import React from "react";
import { Routes, Route} from "react-router-dom";

import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signIn" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
