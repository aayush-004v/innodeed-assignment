import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { data } from "./Cars";
import Volvo from "./Component/Volvo";
import Learn from "./Pages/Learn";
// import Shop from "./Pages/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Volvo/>}/>
        <Route path="/learn/:id" element={<Learn data={data} />}/>
        {/* <Route path="/shop" element={<Shop/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
