import logo from "./logo.svg";
import "./App.css";
import { Userslist } from "./Userslist.js";
import { Todoslist } from "./Todoslist.js";

function App() {
  return (
    <div className="App">
      <div>
        <Userslist />
      </div>
      <div>
        <Todoslist />
      </div>
    </div>
  );
}

export default App;
