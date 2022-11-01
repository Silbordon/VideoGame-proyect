
import { NavLink } from "react-router-dom";
import style from "./Error404.module.css"

const Error404 = () => {
  return (
    <div className={style.errorContainer}>
      <div className={style.error404}></div>
      <p>Or maybe it's easier to go back</p>
      <NavLink className={style.btn} to="/videogames">
        HOME
      </NavLink>
    </div>
  );
};

export default Error404;