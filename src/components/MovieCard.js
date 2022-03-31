import React from "react";
import { Link } from "react-router-dom";





const MovieCard = ({movie}) => {
    
  return (
    <Link to={`/Movie/${movie.id}`}>
    <div   class="card">
      <a href="#">
        <div style={ {backgroundImage: `url(${movie.imgback})`} }class="img1"></div>
        <div style={ {backgroundImage: `url(${movie.imgback})`} } class="img2"></div>
        <div class="title">{movie.title} {movie.type} ||{movie.season}</div>
        <div class="text">{movie.desc}</div>
        <a href="#"><div class="catagory">{movie.type} <i        class="fas fa-film"></i></div></a>
        <a href="#"><div class="views">{movie.release}<i class="far fa-eye"></i> </div></a>
      </a>
    </div>
    </Link>


    )
}

export default MovieCard
