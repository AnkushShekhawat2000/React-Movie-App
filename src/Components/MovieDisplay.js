import React,{useState} from "react"


const MovieDisplay = ({selectedMovie})=>{

    return (
    <div>
      {
        selectedMovie && (
      
          <div className="movie-display">
              <h1>Movie Details</h1>
              <div>
              {
                selectedMovie.banner && 
                <img src={selectedMovie.banner} alt={selectedMovie.title}/>
              } 
              <p>{selectedMovie.title}</p>
              <p>{selectedMovie.actor}</p>
              <p>{selectedMovie.genre}</p>
            </div>

          </div>
         )
      }
    </div>
    ) 
}

export default MovieDisplay