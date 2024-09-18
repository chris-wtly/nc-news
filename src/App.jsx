import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ArticlePage } from "./components/ArticlePage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
