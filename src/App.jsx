import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
