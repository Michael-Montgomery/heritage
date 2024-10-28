
import { HashRouter, Routes, Route } from "react-router-dom";


import './App.css';
import Gallery from "./pages/gallery/gallery";
import Home from "./pages/home/home";








function App() {
  return (
    <HashRouter basename="/">
      <Routes>
          <Route index element={<Home></Home>} />
          <Route path="/gallery" element={<Gallery />} />
         
       
      </Routes>
    </HashRouter>
  )
}

export default App;
