import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux"; 
import { getAllMovies } from '../../redux/actions';
import style from "../CardsContainer/CardsContainer.module.css";
import Card from "../Card/Card"

const CardsContainer = () => {

    // const dispatch = useDispatch()

//me gtraigo todo lo que esta en videogames del store
    const allVideogames = useSelector((state) => state.videogames)

    // useEffect (()=>{
    //     dispatch(getAllMovies())
    // }, [dispatch])

    console.log(allVideogames)
    return (
        <div className={style.container}>
            {allVideogames?.map(el =>{
                return (
                    <Card 
                    key={el.id}
                    background_image={el.background_image}
                    name={el.name}
                    genres={el.genres}
                    platforms={el.platforms}
                    />
                ) 
            })}
        </div>
    );
};

export default CardsContainer;