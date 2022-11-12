import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white text-[18px] md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group ">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white rounded-full opacity-50 left-3 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
          ;
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-2 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 absolute hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
}

export default Row;
