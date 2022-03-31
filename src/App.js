import {useState } from "react";
import './App.css';

import NavBar from "./components/NavBar";
import AddMovie from "./components//AddMovie";
import MovieList from "./components/MovieList";
import { Routes,Route } from "react-router-dom";
import Movieview from "./components/Movieview";


function App() {
    const [word, setWord] = useState("")
    const [rating, setRating] = useState(1)
    const [movies, setMovies] = useState( [
{   id:1,
    title: "Planet Earth II",
    rate: 9.5,
    season:' Season 2 || Epsoide 1',
    type:'Mini-série télévisée',
    ep:'1',
    release:'2016',
    imgback:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjXUJtR4D8kvlwXTlbLPnwZsD1bIfXKrQd5eOBLxUKByME8mPx',
    desc:'David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.',
    trailer:'https://www.youtube.com/embed/c8aFcHFu8QM',
},
{   id:2,
    title: "Breaking Bad",
    rate: 9.5,
    season:' Season 1 || Epsoide 1',
    type:'Series',
    ep:'first',
    release:'2008',
    imgback:'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR116,0,630,1200_AL_.jpg',
    desc:'Un professeur de chimie de lycée chez qui on a diagnostiqué un cancer du poumon inopérable se tourne vers la fabrication et la vente de méthamphétamine pour assurer lavenir de sa famille.',
    trailer:'https://www.youtube.com/embed/HhesaQXLuRY',
},
{
    id:3,
    title: "A Space Odyssey",
    rate: 4,
    season:'1',
    type:'Film',
    ep:'first',
    release:'2001',
    imgback:"https://media.timeout.com/images/105455970/750/562/image.jpg",
    desc:'After discovering a monolith on the lunar surface, the Discovery One and its revolutionary supercomputer set out to unravel its mysterious origin.',
    trailer:'https://www.youtube.com/embed/oR_e9y-bka0',
},
{
    id:4,
    title: "In the Mood for Love",
    rate: 5,
    season:' 1',
    type:'Film',
    ep:'first',
    release:'2000',
    imgback:'https://media.timeout.com/images/105761900/750/422/image.jpg',
    desc:'It portrays a man (Tony Leung) and a woman (Maggie Cheung) whose spouses have an affair together and who slowly develop feelings for each other.',
    trailer:'https://www.youtube.com/embed/dWVDZ98AFhI',
},
{   id:5,
    title: "The Dark Knight",
    rate: 7,
    season:'1',
    type:'Film',
    ep:'first',
    release:'2008',
    imgback:'https://media.timeout.com/images/132671/750/422/image.jpg',
    desc:'After Gordon, Dent and Batman begin an assault on Gothams organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.',
    trailer:'https://www.youtube.com/embed/EXeTwQWrcwY',
},

{   id:6,
    title: "Chernobyl",
    rate: 9.4,
    season:' Season 1 || Epsoide 1',
    type:'Mini-Séries',
    ep:'first',
    release:'2019',
    imgback:'https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg',
    desc:'En avril 1986, une explosion à la centrale nucléaire de Tchernobyl en URSS, devient lune des pires catastrophes causées par lhomme au monde.',
    trailer:'https://www.youtube.com/embed/s9APLXM9Ei8',
    
}])

    const handleAdd = (newMovie) => {
    setMovies([...movies,newMovie]);
    }
    const getData=(keyword)=>{
    setWord(keyword)
    }



    
    

return ( 

    <Routes>
    <Route path="/" element={
    <div style={{display:"flex"}}>
        <div className="navdisplay">
       
      
        <NavBar getData={getData}  />
        <AddMovie handleAdd={handleAdd} />
        </div>
    
    
   
    
   <div  className="marginmovie-list">
   <MovieList movies={movies.filter((movie) => movie.title.toLowerCase().includes(word.trim().toLowerCase()) )}/>
   </div>
    
   

    </div>
    }/>
    <Route path="/Movie/:id" element={<Movieview movies={movies}/>}/>
    </Routes>
    
);
}
export default App;