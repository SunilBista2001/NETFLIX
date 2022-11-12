import { useEffect, useState } from "react";
import axios from "axios";
import requestApi from "../Requests";
function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios
      .get(requestApi.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);
  // console.log(movie);

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black/100">
          <img
            className="w-full h-full object-fit"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="mb-2 text-3xl md:text-5xl ">{movie?.title}</h1>
            <div className="mb-4">
              <button className="border  bg-gray-300 text-black py-1 px-2 ">
                Play
              </button>
              <button className=" border border-gray-300 text-white py-1 px-2 ml-4 ">
                Watch Later
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-2 mb-2">
              {movie?.release_date}
            </p>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[65%] mt-1">
              {truncateString(movie?.overview, 150)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
