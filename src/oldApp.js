// import React, {useState} from "react" 

// const moviesData = [
//     {title: "3 Idiots", actor: "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani", banner: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/3-idiot-1688114504.jpg"},

//     {"title": "Dangal", "actor": "Aamir Khan", "genre": "Biographical/Sports", "director": "Nitesh Tiwari" , banner: "https://images.hindustantimes.com/rf/image_size_800x600/HT/p2/2016/07/04/Pictures/aamir-khan-dangal-the-new-poster-of_cdfced44-41c0-11e6-8e05-c384b245cd95.jpg"},

//     {"title": "Bahubali: The Beginning", "actor": "Prabhas", "genre": "Action/Fantasy", "director": "S.S. Rajamouli"},
//     {"title": "Lagaan", "actor": "Aamir Khan", "genre": "Drama/Sports", "director": "Ashutosh Gowariker"},
//     {"title": "PK", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
//     {"title": "Sholay", "actor": "Amitabh Bachchan", "genre": "Action/Adventure", "director": "Ramesh Sippy"},
//     {"title": "Bajrangi Bhaijaan", "actor": "Salman Khan", "genre": "Drama/Action", "director": "Kabir Khan"},
//     {"title": "Gully Boy", "actor": "Ranveer Singh", "genre": "Musical/Drama", "director": "Zoya Akhtar"},
//     {"title": "Queen", "actor": "Kangana Ranaut", "genre": "Comedy/Drama", "director": "Vikas Bahl"},
//     {"title": "Andhadhun", "actor": "Ayushmann Khurrana", "genre": "Thriller/Comedy", "director": "Sriram Raghavan"}
//   ]


// const App = () =>{
    
//     const [selectedMovie,setSelectedMovie] = useState("")

//    console.log(selectedMovie);

//     return ( 
//         <div style={{
//             display:"flex",
//             justifyContent:"space-around"
//         }}
        
//         >
           
//             <div className="movie-list">
//                 {
//                     moviesData.map((item, index)=>(
//                         <p onClick={()=>setSelectedMovie(item)}
//                         key={index}>{item.title}</p>
//                     ))                    
//                 }

//             </div>
             
//            {
//             selectedMovie && (
//             <div className="movie-display">
//               <h1>Movie Details</h1>
//               <div>
//              {selectedMovie.banner && <img src={selectedMovie.banner} alt={selectedMovie.title}/>} 
//                 <p>{selectedMovie.titlt}</p>
//                 <p>{selectedMovie.actor}</p>
//                 <p>{selectedMovie.genre}</p>
//               </div>

//             </div>
//             )
//            }  
           
           
//         </div>
//     )
// }



