import "./App.css";

import { navLinks } from "./Data/navLinks";

import Nav from "./Components/Nav/Index";
import { Outlet } from "react-router-dom";

function App() {
  document.title = "Cozinha todo dia";

  return (
    <>
      <Nav navLinks={navLinks} />
      <Outlet />
    </>
  );
}

export default App;
