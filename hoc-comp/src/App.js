import logo from "./logo.svg";
import "./App.css";
import SerachUsers from "./Userslist.js";
import SearchTodos from "./Todoslist.js";

function App() {
  return (
    <div className="App">
      <div>
        <SerachUsers />
      </div>
      <div>
        <SearchTodos />
      </div>
    </div>
  );
}

export default App;
