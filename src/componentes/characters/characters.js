import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import Character from '../character/character';

import './characters.css';

const Characters = () => { 

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const [characters, setCharacters] = useState([]);
    const [hasMoore, setHasMoore]     = useState(false);


    useEffect( () => {
        handleFetch();        
        }, []
    );

    const handleFetch = () => {
        fetch(url)
        .then( 
            response => response.json() 
        )
        .then( data => {
            setCharacters( characters.concat(data.results) );   
            return data;
        }) 
        .then( data => {
            setHasMoore( data.info.next ? true : false );     
            setUrl(data.info.next);
        })  
    }

    const loadMoore = () => {
        handleFetch();
    }

    return (
        <main className="main-container characters">
            {characters ?
                characters.map( (character, index) =>
                    <Character index={index} character={character}/>
                ) 
            : 
            <article>
                <h2>Loading characters...</h2>
            </article> }
            {hasMoore ? 
                <Button loadMoore={loadMoore} text="Load Moore..."/>
            : null}
        </main>

    );
}


export default Characters;