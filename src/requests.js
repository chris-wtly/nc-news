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

export function patchArticleLike(article_id, voteChange) {
  return axios
    .patch(
      `https://test-mrgi.onrender.com/api/articles/${article_id}`,
      voteChange
    )
    .catch((err) => {
      return Promise.reject(err);
    });
}

export function postComment(article_id, comment) {
  return axios
    .post(
      `https://test-mrgi.onrender.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((data) => {
      return data;
    })
    .catch((err) => {});
}
export function deleteComment(comment_id) {
  return axios.delete(
    `https://test-mrgi.onrender.com/api/comments/${comment_id}`
  );
}
