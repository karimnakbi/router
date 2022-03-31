import React from 'react'
import {Link, useParams} from 'react-router-dom'

const Movieview = ({movies}) => {
    const {id}=useParams();
    console.log(id)
    const getit=movies.find(el=>el.id === +id)

    const st={width: "700PX",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "5px 10px",
        margin: "8px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"}
  return (
<div>
<div className="wrapper">
  <div className="main_card">
    <div className="card_left">
      <div className="card_datails">
        <h1>{getit.title}</h1>
        <div className="card_cat">
          
          <p className="year">{getit.release}</p>
          <p className="genre">{getit.type}</p>
          <p className="time">{getit.rate}</p>
        </div>
        <p class="disc">{getit.desc}</p>
        
 
      </div>
    </div>
    <div className="card_right">
      <div class="img_container">
        <img width="200"src={getit.imgback} alt=""></img>
        </div>
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i className="fas fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className='trailermargin'>
    <h2>Trailer :</h2>
  <iframe  width="700" height="300" src={getit.trailer}>
</iframe>
<div >
  <Link to="/">
    <button style={st}>BACK HOME PAGE </button>
  </Link>
</div>

  </div>

  






      </div>
    
  )
}

export default Movieview