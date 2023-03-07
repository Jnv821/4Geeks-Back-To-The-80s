import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/single.css";
import Navbar from "../component/navbar.js";
import { Footer } from "../component/footer";

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
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <img className="img-fluid" src={filteredAlbumData.image ? filteredAlbumData.image : <p>LOADING</p>} />
          </div>
          <div className="col-lg-6">
                <p className="information-album">ARTISTA: <span className="single-span" > {filteredAlbumData.artist ? filteredAlbumData.artist: <p>LOADING</p>}</span> </p>
                <p className="information-album">ALBUM: <span className="single-span" > {filteredAlbumData.name ? filteredAlbumData.name: <p>LOADING</p>}</span> </p>
                <p className="information-album">POPULARIDAD: <span className="single-span" > {filteredAlbumData.popularity ? filteredAlbumData.popularity: <p>LOADING</p>}</span> </p>
                <p className="information-album">FECHA DE LANZAMIENTO: <span className="single-span" > {filteredAlbumData.release_date ? filteredAlbumData.release_date: <p>LOADING</p>}</span> </p>
                <p className="information-album">NÚMERO DE CANCIONES: <span className="single-span" > {filteredAlbumData.total_tracks ? filteredAlbumData.total_tracks: <p>LOADING</p>}</span> </p>
          </div>
        </div>
      </div> 
          <Footer></Footer>   
    </>
  );
};
