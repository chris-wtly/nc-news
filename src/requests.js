import axios from "axios";
export function fetchArticles() {
  return axios
    .get("https://test-mrgi.onrender.com/api/articles")
    .then((data) => {
      return data;
    });
}

export function fetchArticle(article_id) {
  return axios
    .get(`https://test-mrgi.onrender.com/api/articles/${article_id}`)
    .then((data) => {
      return data;
    });
}

export function fetchComments(article_id) {
  return axios
    .get(`https://test-mrgi.onrender.com/api/articles/${article_id}/comments`)
    .then((data) => {
      return data;
    });
}
