import Chlider from "../Componet/Chlider";
import { student } from "../data/student";


import "./App.css";

function App() {
  let studentData = student;

  return (
    <>
     <Chlider sname="johon"/>
      <Chlider sname="Milert">
        shubahm
      </Chlider>
      
    </>
  );
}

export default App;

