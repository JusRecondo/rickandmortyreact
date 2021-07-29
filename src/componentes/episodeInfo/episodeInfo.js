import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './episodeInfo.css';

const EpisodeInfo = ({episode, id}) => {


    return (
    
        <li id={id} className="episode-info">
            {episode.episode} 
            <ul>
                <li id={uuidv4()}>"{episode.name}"</li>
                <li id={uuidv4()}>{episode.air_date}</li>
            </ul>
        </li>

    );
}

export default EpisodeInfo;