import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import SearchView from './components/SearchView';
import { Switch, Route } from "react-router-dom";
import MovieView from './components/MovieView';
import PageNotFound from "./components/PageNotFound";


function App() {
  //Function based component to use the Hook 'use state'
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState ('');

  useEffect(() => {
    if (searchText){

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=e45870fd8751fc7c36cd225ee0adc01e&language=en-US&query=${searchText}&page=1&include_adult=false`)
       .then( response => response.json())
       .then(data => {
         setSearchResults(data.results)
       })
    }

  }, [searchText])

  

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/missing-page" component={PageNotFound} />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} /> 
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} /> 
      </Switch>
    </div>
  );
}

export default App;
