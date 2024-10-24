import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/components/Details/:id"
          element={
            <Layout>
              <Details />
            </Layout>
          }
        />
        <Route
          path="/components/Favorites"
          element={
            <Layout>
              <Favorites />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
