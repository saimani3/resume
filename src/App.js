import { useState } from "react";
import './App.css'
import Navbar from "./Components/NavBar/Navbar";
import DrawerSidebar from "./Components/SideBar/DrawerSidebar";
import AllRouters from "./Components/AllRouters";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [toggleDrawerSidebar,settoggleDrawerSidebar]=useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display === "none"){
      settoggleDrawerSidebar({
        display:"flex"
      })
    }else{
      settoggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar toggleDrawer={toggleDrawer}/>
      <DrawerSidebar toggleDrawerSidebar={toggleDrawerSidebar} toggleDrawer={toggleDrawer}/>
      <AllRouters/>
    </Router>
  );
}

export default App;
