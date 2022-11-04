import React, { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({page, setPage}) => {

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
        className={style.pageBtn}>Preview
        </button>
      <p className={style.pageNumber}>{page}</p>
      <button
        onClick={()=>{handlerNext()}} 
      className={style.pageBtn}>Next</button>
    </div>
  );
};

export default Pagination;
