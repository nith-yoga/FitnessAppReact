import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;