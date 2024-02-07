import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import React from "react";

function App() {
  const API_KEY = "0c5e171021c74198b852039622758663";

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [searchQuery, setSearchQuery] = React.useState("");

  const NewsArticles = [];

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
        API_KEY
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .then(setLoading(false));
  }, []);
  return (
    <>
      <NavBar />
      <Content news={news} />
    </>
  );
}

export default App;
