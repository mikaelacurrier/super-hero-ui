import React, {useState, useEffect} from 'react';
import {useParams, withRouter} from 'react-router-dom'
import {fetchData, filtered} from '../utils/heros'


const Hero = () => {
    // const [heroes, setHeroesData] = useState([])

    // useEffect(() => {
    //     console.log('here')
    //     async function pullData() {
    //       const data = await fetchData()
    //       console.log(data)
    
    //       setHeroesData(data)
    //     }
    
    //     pullData()
    //   }, [])

    //   console.log(props)
    

    const {id} = useParams()

    const heroes = JSON.parse(localStorage.getItem('heroes'))
    console.log(heroes)

    const singleHero = heroes.filter(hero => {
        return hero.id.toString() === id
    })

    console.log(singleHero)


    return (
        <div>
            <h3>{singleHero[0].name}</h3>
            <div>
                {singleHero[0].firstappearance}
            </div>
        </div>
    )
}

export default withRouter(Hero)