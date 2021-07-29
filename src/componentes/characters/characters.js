import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import Character from '../character/character';
import { v4 as uuidv4 } from 'uuid';

import './characters.css';

const Characters = () => { 

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character');
    const [characters, setCharacters] = useState([]);
    const [hasMore, setHasMore]     = useState(false);


    useEffect( () => {
        handleFetch();        
        //eslint-disable-next-line react-hooks/exhaustive-deps
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
            setHasMore( data.info.next ? true : false );     
            setUrl(data.info.next);
        })  
    }

    const loadMore = () => {
        handleFetch();
    }

    return (
        <main className="main-container characters">
            {characters ?
                characters.map( (character) =>
                    <Character character={character} id={uuidv4()}/>
                ) 
            : 
            <article>
                <h2>Loading characters...</h2>
            </article> }
            {hasMore ? 
                <Button loadMore={loadMore} text="Load More..."/>
            : null}
        </main>

    );
}


export default Characters;