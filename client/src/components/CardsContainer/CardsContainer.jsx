import React from 'react';
import style from "../CardsContainer/CardsContainer.module.css";
import Card from "../Card/Card"

const CardsContainer = () => {
    return (
        <div className={style.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardsContainer;