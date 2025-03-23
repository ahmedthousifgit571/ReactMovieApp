import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
    const [searhQuery,setSearchQuery] = useState('')    

    const movies = [
        {id:1, title: "john wick" , release_date:"2020"},
        {id:2, title: "Avenger" , release_date:"2022"},
        {id:3, title: "thor" , release_date:"2020"}
    ]

    const handleSearch =(e)=>{
      e.preventDefault()
      alert(searhQuery)
    }
  return (
    <div className='home'>
         <form onSubmit={handleSearch} className='search-form'>
         <input type="text" placeholder='Search for movies...' className='search-input' value={searhQuery} onChange={(e => setSearchQuery(e.target.value))} />
         <button type='submit' className='search-button'>search</button>
         </form>


       <div className='movies-grid'>
         {
            movies.map(movie => (
                movie.title.toLowerCase().startsWith(searhQuery) && (<MovieCard movie={movie} key={movie.id} />)
                 
            ))
         }
       </div>
    </div>
  )
}

export default Home
