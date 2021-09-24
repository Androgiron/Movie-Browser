import Hero from './Hero';
import { Link } from 'react-router-dom';
//API number 45870fd8751fc7c36cd225ee0adc01e https://api.themoviedb.org/3/movie/550?api_key=e45870fd8751fc7c36cd225ee0adc01e

const MovieCard = ({ movie }) => {
        
    const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://clients.cylindo.com/viewer/3.x/v3.0/documentation/img/not_found.gif`;
    const detailUrl = `/movies/${movie.id}`;
    
    return (
        <div className="card" style={{width: '18rem', }}>
            <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={detailUrl} className="btn btn-warning shadow">Show details</Link>
            </div>
        </div>
    )
}


const SearchView = ({keyword, searchResults}) => {
    const title = `You are searching for ${keyword}`
    
    const resultsHtml = searchResults.map((obj, i ) => {
        return  <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
                <div className="container">   
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }             
        </>
    );
};

export default SearchView;
