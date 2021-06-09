import react, {useState, useEffect} from 'react';
import './App.css';
import Heroes from './components/heroes';
import {fetchData, filtered} from './utils/heros'


export default () => {
  const [heroesData, setHeroesData] = useState([])
  const [filteredHeroes, setFilteredHeroes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function pullData() {
      // const { data } = await axios.get('http://localhost:1337/api')
      const data = await fetchData()

      setHeroesData(data)
      setFilteredHeroes(data)
    }

    pullData()
  }, [])

  useEffect(() => {

    const heroes = filtered(heroesData, searchTerm)
    // const filtered = heroesData.filter(hero => {
    //   return hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    // })

    setFilteredHeroes(heroes)

  }, [searchTerm])

  return (
    <>
      <Heroes 
        heroesDataAsProps={filteredHeroes}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}
