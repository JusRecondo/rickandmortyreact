import React, { useEffect, useState } from 'react';
import Button from '../button/button';
import EpisodeInfo from '../episodeInfo/episodeInfo';
import { v4 as uuidv4 } from 'uuid';
import './episodes.css';

const Episodes = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode');
    const [episodes, setEpisodes] = useState([]);
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
            setEpisodes( episodes.concat(data.results) );   
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
        <main className="main-container episodes">
            <h1>Episodes</h1>
            {episodes ?
            <ul className="episodes-list">
                {episodes.map( (episode) =>
                    <EpisodeInfo episode={episode} id={uuidv4()}/>
                )}
            </ul>
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

export default Episodes;