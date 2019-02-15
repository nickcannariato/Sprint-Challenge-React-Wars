import React from "react";
import './StarWars.css';

const Character = props => {
  const {name, height, gender, mass, skinColor, hairColor, birthYear, eyeColor, created, edited} = props;
  return (
    <div className="character">
      <h2 className="character__name">{name}</h2>
      <ul className="character__attrs">
        <li><span>Height:</span> {height}</li>
        <li><span>Weight:</span> {mass}</li>
        <li><span>gender:</span> {gender}</li>
        <li><span>Hair:</span> {hairColor}</li>
        <li><span>Skin:</span> {skinColor}</li>
        <li><span>Eyes:</span> {eyeColor}</li>
        <li><span>Birth Year:</span> {birthYear}</li>
        <li><span>Created:</span> {new Date(created).toLocaleString('en-US')}</li>
        <li><span>Edited:</span> {new Date(edited).toLocaleString('en-US')}</li>
      </ul>
    </div>
  );
};

export default Character;