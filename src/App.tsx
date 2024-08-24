import { requests } from "./request";
import { Row } from "./components/Row";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        title="Trending"
        isLargeRow
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rating"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="Kids"
        fetchUrl={requests.fetchKidsMovies}
      />
      <Row
        title="Documentary"
        fetchUrl={requests.fetchDocumentMovies}
      />
    </div>
  );
}

export default App;
