import './episodeInfo.css';

const EpisodeInfo = ({index, episode}) => {
    return (
    
        <li key={index} className="episode-info">
            {episode.episode} 
            <ul>
                <li>"{episode.name}"</li>
                <li>{episode.air_date}</li>
            </ul>
        </li>

    );
}

export default EpisodeInfo;