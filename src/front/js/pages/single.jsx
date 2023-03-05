import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";

export const Single = (props) => {

const url = useLocation().pathname
const [spotifyToken , setSpotifyToken] = useState({})
const [albumData, setAlbumData] = useState({})
const [spotifyAlbumData, setSpotifyAlbumData] = useState({})
const [filteredAlbumData, setFilteredAlbumData] = useState({})

useEffect(() => {
  // get the album data from our db
  fetch(process.env.BACKEND_URL + "/api" + url)
  .then(res => res.json())
  .then(data => setAlbumData({...data}))
  .catch(err => console.log(err))
}, [])

useEffect(() => {
  // get the token from our db
  fetch(process.env.BACKEND_URL + "/api/token/spotify")
  .then(res => res.json())
  .then(data => setSpotifyToken({...data}))
  .catch(err => err)
}, [])

useEffect(() => {
  // get the data from spotify

  if (!albumData) return; 

  if(albumData.album){
  console.log("Fetch is being done")
  fetch(albumData.album.spotify_url, {
    method: "GET",
    headers: { 
      "Authorization" : "Bearer " + spotifyToken.access_token
    }
  })
  .then(res => res.json())
  .then(data => setSpotifyAlbumData({...data}))
  .catch(err => console.log(err))
  }


}, [albumData, spotifyToken])

// Logging for spotify data
useEffect(() => {
  console.log(spotifyAlbumData)
}, [spotifyAlbumData])

useEffect(() => {
  if(spotifyAlbumData.artists){
    for(let artist of spotifyAlbumData.artists){
      const name = artist.name
      setFilteredAlbumData({...filteredAlbumData, "artist": name}); 
    }
    setFilteredAlbumData((filteredAlbumData) => ({...filteredAlbumData, "name": spotifyAlbumData.name}));
    setFilteredAlbumData((filteredAlbumData) => ({...filteredAlbumData, "popularity": spotifyAlbumData.popularity}));
    setFilteredAlbumData((filteredAlbumData) => ({...filteredAlbumData, "release_date": spotifyAlbumData.release_date}));
    setFilteredAlbumData((filteredAlbumData) => ({...filteredAlbumData, "total_tracks": spotifyAlbumData.total_tracks}));
    setFilteredAlbumData((filteredAlbumData) => ({...filteredAlbumData, "image": spotifyAlbumData.images[0].url}))
  }

}, [spotifyAlbumData])

useEffect(() => {
  console.log(filteredAlbumData)
}, [filteredAlbumData])
  return (
    <>
      <Navbar />
      <div className="container-single">
        <div className="single-photo">
          <img src={filteredAlbumData.image ? filteredAlbumData.image : <p>LOADING</p>} width="500" height="500" />
        </div>
          <div className="container-information">
              <div className="information-album"><h3 >- ARTISTA : <br/>{filteredAlbumData.artist ? filteredAlbumData.artist: <p>LOADING</p>} </h3></div>
                <br />
              <div className="information-author"><h3 >- ALBUM : <br/>{filteredAlbumData.name ? filteredAlbumData.name: <p>LOADING</p>}</h3></div>
                <br />
              <div className="information-year"><h3 >- POPULARIDAD : <br/>{filteredAlbumData.popularity ? filteredAlbumData.popularity: <p>LOADING</p>}</h3></div>
                <br />
              <div className="information-year"><h3 >- FECHA DE LANZAMIENTO : <br/>{filteredAlbumData.release_date ? filteredAlbumData.release_date: <p>LOADING</p>}</h3></div>
                <br />
              <div className="information-year"><h3 >- NÚMERO DE CANCIONES: <br/>{filteredAlbumData.total_tracks ? filteredAlbumData.total_tracks: <p>LOADING</p>}</h3></div>
          </div>
      </div>
        
    </>
  );
};
