import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Heroes = props => {
    // useState take 1 parameter -- default value
    // returns array w/ 2 values
    // 1) state
    // 2) a function that updates state
    // console.log(props.heroesDataAsProps)
    return (
        <div className='heroesWrapper'>
            <h2 id="heroesTitle">Meet the Heroes</h2>
            <div>A searchable list of all the Heroes</div>
            <input type="text" name="search" onChange={(event) => props.setSearchTerm(event.target.value)}/>
            {props.heroesDataAsProps.map(hero => {
                return (
                    <>
                        <div>
                            <NavLink to={`/heroes/${hero.id}`}>{hero.name}</NavLink>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Heroes;