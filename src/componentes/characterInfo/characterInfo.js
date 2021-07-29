import React from 'react';
import './characterInfo.css';

const CharacterInfo = ({showInfo, showHideInfo, character}) => {
    return (
        <article className={showInfo ? "character-info show" : "character-info"} onClick={showHideInfo}>
            <h2>{character.name}</h2>
            <ul>
                <li>
                    Species: {character.species}
                </li>
                <li>
                    Origin: {character.origin.name}
                </li>
                <li>
                    Status: {character.status}
                </li>
            </ul>
        </article>
    );
}

export default CharacterInfo;