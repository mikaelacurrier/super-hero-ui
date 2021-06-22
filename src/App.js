import react, {useState, useEffect} from 'react';
import './App.css';
import Heroes from './components/heroes';
import ErrorPage from './components/errorPage';
import Hero from './components/hero';
import {fetchData, filtered} from './utils/heros'
import  { BrowserRouter, Route, Switch } from 'react-router-dom';

export default () => {
  const [heroesData, setHeroesData] = useState([])
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      const data = await fetchData()

      setHeroesData(data)
      setFilteredHeroes(data)
      localStorage.setItem('heroes', JSON.stringify(data))
    }

    pullData()
  }, [])

  useEffect(() => {

    const heroes = filtered(heroesData, searchTerm)
    setFilteredHeroes(heroes)

  }, [searchTerm])

  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Heroes 
            heroesDataAsProps={filteredHeroes}
            setSearchTerm={setSearchTerm}
          />
        </Route>

        <Route path='/heroes/:id'>
          <Hero />
        </Route>

        <Route path="*">
          <ErrorPage />
        </Route>
         
        </Switch>
      </BrowserRouter>
    </>
  );
}
