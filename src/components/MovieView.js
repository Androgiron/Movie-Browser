import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//So this next function using params, state and effect getting api request to have an id that triggers the execution of the useEffect when the id changes
const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    console.log("make an Api request", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=e45870fd8751fc7c36cd225ee0adc01e`
    )
      .then((response) => response.json())
      .then((data) => {
        //just set this timeout to see how 'Loading..' function i have created works
        setTimeout(() => {
          setMovieDetails(data);
          setIsloading(false);
        }, 500);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      
      const posterPath = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : "https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif";
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};

export default MovieView;
