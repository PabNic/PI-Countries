import style from "./Landing.module.css";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.tittle}>Welcome to the World App</h1>
      <p className={style.text}>
        Explore the world and discover the wonders of each Country with the{" "}
        <span>World App! </span>
        
      </p>
      <br />
      <br />
      <p className={style.text_secundario}>
        This is an App created to give you a Tour wile you are chilling home.  
        <br />
        <br />
        Be ready to enjoy, and hit that Start button!!
      </p>
      <button className={style.button}>
        <NavLink to="/home">START</NavLink>
      </button>
    </div>
  );
};

export default Landing;
