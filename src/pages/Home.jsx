import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import {searchMovies , getPopularMovies} from '../services/api'
import '../css/Home.css'

function Home() {
    const [searhQuery,setSearchQuery] = useState('')    
    const [movies,setMovies] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
      const loadPopularMovies = async()=>{
        try{
         const popularMovies = await getPopularMovies()
         setMovies(popularMovies)
        }catch(err) {
        console.log(err);
        setError('Failed to load the movies...')
        
        }finally{
          setLoading(false)
        }
      }
      loadPopularMovies()
    },[])
    

    const handleSearch = async(e)=>{
      e.preventDefault()
      if(!searhQuery.trim()) return
      if(loading) return 

      setLoading(true)
      try{
        const searchResults = await searchMovies(searhQuery)
        setMovies(searchResults)
        setError(null)
      }catch(err){
       console.log(err);
       setError("Failed to search movies...")
       
      }finally{
        setLoading(false)
      }
    }
  return (
    <div className='home'>
         <form onSubmit={handleSearch} className='search-form'>
         <input type="text" placeholder='Search for movies...' className='search-input' value={searhQuery} onChange={(e => setSearchQuery(e.target.value))} />
         <button type='submit' className='search-button'>search</button>
         </form>

         {error && <div className='error-message'>{error}</div> }

         {
        loading ? ( <div className='loading'>Loading...</div> ) : (  <div className='movies-grid'>
          {
             movies.map(movie => (
                 movie.title.toLowerCase().startsWith(searhQuery) && (<MovieCard movie={movie} key={movie.id} />)
                  
             ))
          }
        </div>)
      }
      
    </div>
  )
}

export default Home
