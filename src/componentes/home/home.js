import React from 'react';
import CustomLink from '../customLink/customLink';
import './home.css';
import logo from './logo.svg';

const Home = () => { 

    return (
        <main className="main-container">
            <img src={logo} alt="logo" className="logo"/>

            <p>
            Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block, Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.

            Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.

            The fourth season premiered on November 10, 2019, and consists of ten episodes. A fifth season was confirmed in July 2020, as part of a long-term deal in May 2018 that ordered 70 new episodes over an unspecified number of seasons. The fifth season premiered on June 20, 2021 and will consist of ten episodes.
            </p>
            <CustomLink path="/characters" text="See Characters"/>
        </main>
    );
}


export default Home;