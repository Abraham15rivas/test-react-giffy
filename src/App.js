import { useCallback } from 'react';
import { Link, Route, useLocation } from 'wouter';
import ListOfGifs from 'components/listOfGifs/ListOfGifs';
import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import GifDetail from 'components/detail/GifDetail';
import TrendingSearches from 'components/trending/TrendingSearches';
import SearchForm from 'components/searchForm/index';
import './App.css';

function App() {
  const [path, pushLocation] = useLocation('');

  const handleSubmit = useCallback(({ keyword }) => {
    pushLocation(`/git/${keyword}`)
  }, [pushLocation])

  return (
    <StaticContext.Provider value={
      {
        name: "Abi RJ",
        description: "test description"
      }
    }>
      <div className="App">
        <section className="App-content">
          <SearchForm onSubmit={handleSubmit} />
          <h1>Giffy</h1>
          <Link to='/git/random'>Gifs random</Link>
          <Link to='/git/pandas'>Gifs pandas</Link>
          <Link to='/git/mapaches'>Gifs mapaches</Link>
          <Link to='/git/venezuela'>Gifs Venezuela</Link>
          <br />
          <GifsContextProvider>
            <Route
              component={ListOfGifs}
              path="/git/:keyword"
            />
            <Route
              component={ListOfGifs}
              path="/"
            />
            <Route
              component={GifDetail}
              path="/git/:id"
            />
          </GifsContextProvider>
        </section>
        <section className="App-content">
          <h1>Trendings</h1>
          <TrendingSearches />
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
