import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <Sidebar />
        <Homepage aristname="Arijit Singh" />
      </div>
    </div>
  );
}

export default App;
