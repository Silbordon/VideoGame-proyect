import React from 'react';
import style from "../Loading/Loading.module.css";

const Loading = () => {
    return (
        <div className={style.loadingContainer}>  
            <span class={style.loader}></span>
        </div>
    );
};

export default Loading;