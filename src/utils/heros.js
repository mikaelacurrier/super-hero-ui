import fetchApiData from '../actions/heroes';

export async function fetchData() {
    const data = await fetchApiData()

    return data
}

export const filtered = (heroesData, searchTerm) => heroesData.filter(hero => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase())
})