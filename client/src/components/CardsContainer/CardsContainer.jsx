import React from "react";
import { useSelector } from "react-redux";
import style from "../CardsContainer/CardsContainer.module.css";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const CardsContainer = ({ page }) => {
  const allVideogames = useSelector((state) => state.videogames); //es lo que renderizo
  const paginatedVideogames = paginate(allVideogames, page); //devuelve los elementos por pagina

  const loader = useSelector((state)=> state.isLoader)
  // console.log(loader)
// console.log("totalvideogames",Object.keys(totalVideogames).length); 
console.log("videogames renderizados",allVideogames);
console.log("cantidad", allVideogames.length);

  if(!loader){
    if (paginatedVideogames.length > 0) {
      return (
        <div className={style.container}>
          {paginatedVideogames.map((el) => {
            return (
              <Card
                id={el.id}
                key={el.id}
                background_image={el.background_image}
                name={el.name}
                genres={el.genres}
                platforms={el.platforms}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={style.container}>
          <h4>
            oops!! the chosen filter has no options available. but hey good news
            :) you can choose another.{" "}
          </h4>
        </div>
      );
    }
  }else {
    return (
      <Loading />
      // <div className={style.loadingContainer}>  <span class={style.loader}></span></div>
    
    );
  }
    
  
};

const paginate = (totalElements, page) => {
  let start = (page - 1) * 15;
  let end = start + 15;
  return totalElements.slice(start, end);
};

export default CardsContainer;
