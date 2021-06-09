import React, { useState } from 'react';


const Heroes = props => {
    // useState take 1 parameter -- default value
    // returns array w/ 2 values
    // 1) state
    // 2) a function that updates state
    return (
        <div className='anythingYouWant'>
            <h2>Meet the Heroes</h2>
            <div>A searchable list of all the Heroes</div>
            <input type="text" name="search" onChange={(event) => props.setSearchTerm(event.target.value)}/>
            {props.heroesDataAsProps.map(hero => {
                return (
                    <>
                        <div>{hero.name}</div>
                        <div>{hero.realname}</div>
                    </>
                )
            })}
        </div>
    )
}

export default Heroes;