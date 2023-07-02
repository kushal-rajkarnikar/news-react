import React from "react";
import NewsBlock from "./NewsBlock";

export default function Content() {
  const API_KEY = "0c5e171021c74198b852039622758663";

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const NewsArticles = [];

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + API_KEY
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .then(setLoading(false));
  }, []);

  console.log(news);

  //   const NewsArticles = news.map(function (newsItem) {
  //     return <NewsBlock title={newsItem.title} />;
  //   });

  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 align="center">BREAKING NEWS</h1>
          </div>
        </div>

        <div className="news-columns row">
          {loading
            ? "Loading..."
            : news.map(function (newsItem) {
                return <NewsBlock newsitem={newsItem} />;
              })}
        </div>
      </div>
    </main>
  );
}
