import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Countries from "../Countries/Countries";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import { useState } from "react";

const Home = ({ countries }) => {
  
  const [firstToShow, setFirstToShow] = useState(0);

  const handlePrevious = () => {
    if (firstToShow < 10) return;
    setFirstToShow(firstToShow - 10);
  };

  const handleNext = () => {
    if (firstToShow + 10 >= countries.length) return;
    setFirstToShow(firstToShow + 10);
  };

  return (
    <div className={style.home}>
      <NavBar />
      <Filters />
      <Pagination handlePrevious={handlePrevious} handleNext={handleNext} />
      <Countries countries={countries} firstToShow={firstToShow} />
    </div>
  );
};

export default Home;
