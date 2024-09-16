import axios from "axios";
export function fetchArticles() {
  return axios
    .get("https://test-mrgi.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
}
