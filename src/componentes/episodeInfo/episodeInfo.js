import React from 'react';
import './episodeInfo.css';

const EpisodeInfo = ({episode}) => {

    return (
    
        <li className="episode-info">
            {episode.episode} 
            <ul>
                <li>"{episode.name}"</li>
                <li>{episode.air_date}</li>
            </ul>
        </li>

    );
}

export default EpisodeInfo;