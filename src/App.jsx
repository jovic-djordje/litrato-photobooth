import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigations/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
