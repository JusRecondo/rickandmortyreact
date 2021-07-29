import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import EpisodeInfo from '../episodeInfo/episodeInfo';
import './episodes.css';

const Episodes = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode');
    const [episodes, setEpisodes] = useState([]);
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
            setEpisodes( episodes.concat(data.results) );   
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
        <main className="main-container episodes">
            <h1>Episodes</h1>
            {episodes ?
            <ul className="episodes-list">
                {episodes.map( (episode, index) =>
                    <EpisodeInfo index={index} episode={episode}/>
                )}
            </ul>
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

export default Episodes;