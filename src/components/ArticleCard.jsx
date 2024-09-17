import { Link } from "react-router-dom";

export function ArticleCard({ articleCards }) {
  return (
    <div>
      {articleCards.map((articleCard) => {
        return (
          <Link
            key={articleCard.article_id}
            to={`/articles/${articleCard.article_id}`}
          >
            <div className="article_div">
              <h2>{articleCard.title}</h2>
              <div className="inner_article_div">
                <img src={articleCard.article_img_url} className="img_card" />
                <h3>Authored by {articleCard.author}</h3>
              </div>
              <h4 className="comment_bubble">
                {articleCard.comment_count} Comments
              </h4>
              <h5 Date> {articleCard.created_at}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
