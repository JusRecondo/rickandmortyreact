import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './characterInfo.css';

const CharacterInfo = ({showInfo, showHideInfo, character, id}) => {
    return (
        <article id={id} className={showInfo ? "character-info show" : "character-info"} onClick={showHideInfo}>
            <h2>{character.name}</h2>
            <ul>
                <li id={uuidv4()}>
                    Species: {character.species}
                </li>
                <li id={uuidv4()}>
                    Origin: {character.origin.name}
                </li>
                <li id={uuidv4()}>
                    Status: {character.status}
                </li>
            </ul>
        </article>
    );
}

export default CharacterInfo;