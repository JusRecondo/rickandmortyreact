import React, { useState } from "react";
import CharacterInfo from "../characterInfo/characterInfo";
import './character.css';

const Character = ({character}) => {

    const [showInfo, setShowInfo] = useState(false);

    const showHideInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <section className="character-item">
            <article title={character.name} onClick={showHideInfo}>
                <h2 className="character-name">
                    {character.name}
                </h2>
                <img src={character.image}  alt={character.name}/>
            </article>
            <CharacterInfo character={character} showInfo={showInfo} showHideInfo={showHideInfo}/>
        </section>
    );
}

export default Character;