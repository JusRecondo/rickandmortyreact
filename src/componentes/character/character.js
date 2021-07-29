import React, { useState } from "react";
import CharacterInfo from "../characterInfo/characterInfo";
import { v4 as uuidv4 } from 'uuid';
import './character.css';

const Character = ({character, id}) => {

    const [showInfo, setShowInfo] = useState(false);

    const showHideInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <section className="character-item" id={id}>
            <article title={character.name} onClick={showHideInfo} id={uuidv4()}>
                <h2 className="character-name">
                    {character.name}
                </h2>
                <img src={character.image}  alt={character.name}/>
            </article>
            <CharacterInfo id={uuidv4()} character={character} showInfo={showInfo} showHideInfo={showHideInfo}/>
        </section>
    );
}

export default Character;