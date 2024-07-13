import { useState } from 'react';
import { Link, Route, useLocation } from 'wouter';
import ListOfGifs from 'components/listOfGifs/ListOfGifs';
import StaticContext from 'context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import GifDetail from 'components/detail/GifDetail';
import TrendingSearches from 'components/trending/TrendingSearches';
import SearchForm from 'components/searchForm/index';
import { Helmet } from 'react-helmet'
import './App.css';

function App() {
  const [path, pushLocation] = useLocation('');
  const [title, setTitle] = useState('Home')

  const initialKeyword =  path.split('/')[2] ?? ''
  const initialRating =  path.split('/')[3] ?? 'g'

  return (
    <StaticContext.Provider value={
      {
        name: "Abi RJ",
        description: "test description"
      }
    }>
      <div className="App">
        <Helmet>
          <title>{ title }</title>
          <meta name='description' content={ title } />
        </Helmet>
        <section className="App-content">
          <SearchForm initialKeyword={initialKeyword} initialRating={initialRating} />
          <h1>Giffy</h1>
          <Link to='/gifs/random'>Gifs random</Link>
          <Link to='/gifs/pandas'>Gifs pandas</Link>
          <Link to='/gifs/mapaches'>Gifs mapaches</Link>
          <Link to='/gifs/venezuela'>Gifs Venezuela</Link>
          <br />
          <GifsContextProvider>
            <Route
              component={ListOfGifs}
              path="/gifs/:keyword/:rating"
            />
            <Route
              component={ListOfGifs}
              path="/gifs/:keyword/"
            />
            <Route
              component={ListOfGifs}
              path="/"
            />
            {
              path.includes('/gif/') ?
                <Route
                  component={GifDetail}
                  path="/gif/:id"
                />
              : <></>
            }
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
