import Message from "./Message";
import NavBar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import {About, Gallary, Home, Services, Contact} from "./components/NavBar/Pages";
// import {Gallary} from "./components/NavBar/Pages/Gallary"
// import {Home} from "./components/NavBar/Pages/Home"
// import {Services} from "./components/NavBar/Pages/Services"
// import { Contact } from "./components/NavBar/Pages/Contact";

function App() {
  return (
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallary" element={<Gallary/>}></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
