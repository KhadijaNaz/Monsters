import React from 'react';
import './CardList.styles.css';
import './cardlist2.styles.css';

export const CardList =props => {
 return<div className= 'card-list'>{props.children}</div>;
 
};

export const CardList2 =props => {
    return<div className= 'card-list2'>{props.children2}</div>;
   };