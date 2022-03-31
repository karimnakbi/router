
const NavBar = ({getData}) => {



  
    return(
    <div >
      <div className="search">
      <input   className="searchTerm" type="search" placeholder="Search" onChange={(e)=>getData(e.target.value)}/>
      <button  type="submit" className="searchButton">search</button>
      
      </div>
        

    </div>
  )
    
}

export default NavBar
