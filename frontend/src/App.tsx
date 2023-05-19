import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./style/App.css";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="outlet">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
