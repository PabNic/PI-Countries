import CountryCard from "../CountryCard/CountryCard";
import style from "./Countries.module.css";

const Countries = ({ countries }) => {
  return (
    <div className={style.contenedor}>
      {countries &&
        countries.map(({ id, name, image, continent }) => {
          return (
            <CountryCard
              key={id}
              id={id}
              name={name}
              image={image}
              continent={continent}
            />
          );
        })}
    </div>
  );
};

export default Countries;
