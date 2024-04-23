import { Card } from "./components/card";
import { InputSearch } from "./components/input";

import './App.css'
function App() {


  return (
    <div className="max-w-6xl mx-auto p-4 grid-container ">

      <div className="flex items-center space-x-4 mb-6">
        <InputSearch />
      </div>

      <Card title={"olá"} content="asdasd"/>  
      <Card title={"olá"} content="asdvaf"/> 

    </div>
  );
}

export default App;
