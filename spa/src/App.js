import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
