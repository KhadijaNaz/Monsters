import React from 'react';
import './card.styles.css';
export const Card= props => (
    <div className= 'card-container'>
        <img alt="monster" src={'https://robohash.org/${props.monsters.id}?set=set2&size=280x280'}/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
);