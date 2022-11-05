import React from "react";
import style from "./Pagination.module.css";
import { useSelector } from "react-redux";

const Pagination = ({page, setPage}) => {

  const allVideogames = useSelector((state) => state.videogames); //es lo que renderizo
  
  let maxPage = (Math.ceil(allVideogames.length/15))
  // console.log(maxPage);

const handlerNext = () =>{
    setPage(page + 1)
}

const handlerPreview = () =>{
    if(page > 1) setPage(page - 1)
}

  return (
    <div className={style.paginationContainer}>
      <button 
      onClick={()=>{handlerPreview()}}
        className={page > 1 ? style.pageBtn : style.none}>Preview
        </button>
      <p className={style.pageNumber}>{page}</p>
      <button
        onClick={()=>{handlerNext()}} 
      className={page < maxPage ? style.pageBtn : style.none}>Next</button>
    </div>
  );
};

export default Pagination;
