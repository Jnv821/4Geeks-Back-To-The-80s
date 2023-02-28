import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "../component/navbar.js";
import Section from "../component/Section.jsx";
import { Footer } from "../component/footer.js";

export const Home = () => {
  let [token, setToken] = useState("");

  // useEffect(() => {
  //   fetch(
  //     "https://3001-jrdelrio-4geeksbacktoth-6ahzti1ytn9.ws-us87.gitpod.io/api/token"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // fetch de la data de albums
  //let [masterList, setMasterList] = useState([]);
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => setMasterList(data.results))
  //     .catch((err) => console.error(err));
  // }, [token]);

  const masterList = [
    {
      id: 1,
      album: "Duck Rock",
      artist: "Malcolm McLaren",
      year: "1983",
      cover:
        "https://cdn.pitchfork.com/albums/25532/homepage_large.b90dab0a.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6S4f7yDtJlS0iQMEuCtIF0",
    },
    {
      id: 2,
      album: "Fever",
      artist: "Tenor Saw",
      year: "1985",
      cover:
        "https://cdn2.pitchfork.com/albums/25591/homepage_large.3e275253.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/4JbhpZDMt9cCZC8KC1vZrG",
    },
    {
      id: 3,
      album: "Don't Break the Oath",
      artist: "Mercyful Fate",
      year: "1984",
      cover:
        "https://cdn2.pitchfork.com/albums/25503/homepage_large.254083f4.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6gADLDKOjcXTFrfE5Xp3HA",
    },
    {
      id: 4,
      album: "Escape",
      artist: "Whodini",
      year: "1984",
      cover:
        "https://cdn.pitchfork.com/albums/25527/homepage_large.ba44954f.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/0wXylkn9taeEjiiac1S2zU",
    },
    {
      id: 6,
      album: "For Olim",
      artist: "Cecil Taylor",
      year: "1987",
      cover:
        "https://cdn4.pitchfork.com/albums/25497/homepage_large.ae1139f8.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7pgT4PvmmW2KUEKIaKEaok",
    },
    {
      id: 7,
      album: "Straight From the Heart",
      artist: "Patrice Rushen",
      year: "1982",
      cover:
        "https://cdn2.pitchfork.com/albums/25529/homepage_large.9273b3f5.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1y2MGKwD1ap3FxPc4ii6QO",
    },
    {
      id: 8,
      album: "Generic Album - Flipper",
      artist: "Flipper",
      year: "1982",
      cover:
        "https://cdn2.pitchfork.com/albums/25538/homepage_large.f2634f8d.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7p8wkhnQPET9CsQRpqrIYP",
    },
    {
      id: 9,
      album: "Hot, Cool & Vicious",
      artist: "Salt-N-Pepa",
      year: "1986",
      cover:
        "https://cdn4.pitchfork.com/albums/25536/homepage_large.3cd8b43e.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5QFYPgLGw6DYz8S3TrLM2d",
    },
    {
      id: 10,
      album: "The Age of Consent",
      artist: "Bronski Beat",
      year: "1984",
      cover:
        "https://cdn2.pitchfork.com/albums/25486/homepage_large.ac323f2f.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6OMYQUITdN6wBaWfEtgooI",
    },
    {
      id: 12,
      album: "Locust Abortion Technician",
      artist: "Butthole Surfers",
      year: "1987",
      cover:
        "https://cdn3.pitchfork.com/albums/25494/homepage_large.2b9683e9.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3jOpGJzljTdOAYYPrBmyQE",
    },
    {
      id: 14,
      album: "Tom Tom Club",
      artist: "Tom Tom Club",
      year: "1981",
      cover:
        "https://cdn4.pitchfork.com/albums/25477/homepage_large.98a4907b.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5WKUL88usO5Y8cfbh2EQdu",
    },
    {
      id: 16,
      album: "Life Is... Too $hort",
      artist: "Too $hort",
      year: "1988",
      cover:
        "https://cdn4.pitchfork.com/albums/25531/homepage_large.5d48c14a.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3vuQ0qc1DF5jJ4mz5Thm5J",
    },
    {
      id: 17,
      album: "The Glow of Love",
      artist: "Change",
      year: "1980",
      cover:
        "https://cdn3.pitchfork.com/albums/25528/homepage_large.85d11b33.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2rzk6jm1tR1ZSAU5IVvyFP",
    },
    {
      id: 18,
      album: "Wild Planet",
      artist: "The B-52's",
      year: "1980",
      cover:
        "https://cdn3.pitchfork.com/albums/25476/homepage_large.93c39957.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1K4t7Jv7DuolDWnFLxKxkd",
    },
    {
      id: 19,
      album: "The Visitors",
      artist: "ABBA",
      year: "1981",
      cover:
        "https://cdn3.pitchfork.com/albums/25478/homepage_large.4b89bfe2.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3JHZ83ohEBDLFQfbVfDHFh",
    },
    {
      id: 20,
      album: "Plux Quba",
      artist: "Nuno Canavarro",
      year: "1988",
      cover:
        "https://cdn4.pitchfork.com/albums/25517/homepage_large.bcc1b43b.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5RXy2dzARyTcyXn4Vwomzr",
    },
    {
      id: 21,
      album: "90",
      artist: "808 State",
      year: "1989",
      cover:
        "https://cdn4.pitchfork.com/albums/25542/homepage_large.a7eb2899.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/46z1u29jqg6fZA6mAO2E8Y",
    },
    {
      id: 23,
      album: "Night and Day",
      artist: "Joe Jackson",
      year: "1982",
      cover:
        "https://cdn2.pitchfork.com/albums/25492/homepage_large.e4c061c2.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/01sMJCr0xosXP8uZ2djLvd",
    },
    {
      id: 24,
      album: "All Hail the Queen",
      artist: "Queen Latifah",
      year: "1989",
      cover:
        "https://cdn3.pitchfork.com/albums/25511/homepage_large.c01b3850.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6Agl4DVuihiDPuxuN1L8Jv",
    },
    {
      id: 25,
      album: "Dreams Less Sweet",
      artist: "Psychic TV",
      year: "1983",
      cover:
        "https://cdn.pitchfork.com/albums/25577/homepage_large.23a2e29e.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1XqqvDgFYxFu0bX9CjuW6S",
    },
    {
      id: 26,
      album: "Streetcleaner",
      artist: "Godflesh",
      year: "1989",
      cover:
        "https://cdn.pitchfork.com/albums/25507/homepage_large.10a67b97.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5fRIh0Yk4eFLst6Nj7RUDF",
    },
    {
      id: 28,
      album: "Private Dancer",
      artist: "Tina Turner",
      year: "1984",
      cover:
        "https://cdn3.pitchfork.com/albums/25589/homepage_large.463c47cf.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7gVHUNPQr0AE2A0Yf5MjqR",
    },
    {
      id: 29,
      album: "Rio",
      artist: "Duran Duran",
      year: "1982",
      cover:
        "https://cdn.pitchfork.com/albums/25287/homepage_large.55074c75.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/02tfQwJSOLP77oCd9U8bqm",
    },
    {
      id: 30,
      album: "Cupid & Psyche 85",
      artist: "Scritti Politti",
      year: "1985",
      cover:
        "https://cdn4.pitchfork.com/albums/25576/homepage_large.3735cafa.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/0nBH3ITWaQDYT2wAWRdg3K",
    },
    {
      id: 31,
      album: "Mister Yellowman",
      artist: "Yellowman",
      year: "1982",
      cover:
        "https://cdn3.pitchfork.com/albums/25594/homepage_large.583fa009.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1ub0O2c6o8TFplwF01SADt",
    },
    {
      id: 33,
      album: "Soliloquy for Lilith",
      artist: "Nurse With Wound",
      year: "1988",
      cover:
        "https://cdn3.pitchfork.com/albums/25575/homepage_large.71ce6018.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/0CLTJj3Fl9Y2auTOjGBsC4",
    },
    {
      id: 34,
      album: "Playing With a Different Sex",
      artist: "Au Pairs",
      year: "1981",
      cover:
        "https://cdn.pitchfork.com/albums/25574/homepage_large.03c8d0ab.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2odEfKOviFnSdftg4OYbdp",
    },
    {
      id: 35,
      album: "Rhyme Pays",
      artist: "Ice-T",
      year: "1987",
      cover:
        "https://cdn4.pitchfork.com/albums/25481/homepage_large.1b5f1dac.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7h6uzgu1YIbDl7faPO6gEH",
    },
    {
      id: 36,
      album: "Jane From Occupied Europe",
      artist: "Swell Maps",
      year: "1980",
      cover:
        "https://cdn4.pitchfork.com/albums/25541/homepage_large.09a585d9.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2Ip1BhVJXSsWkaL6kLbxuZ",
    },
    {
      id: 38,
      album: "Merry Christmas, Mr. Lawrence",
      artist: "Ryuichi Sakamoto",
      year: "1983",
      cover:
        "https://cdn3.pitchfork.com/albums/25537/homepage_large.108fcc79.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7Dy4HPuS44WsMf42BZnkku",
    },
    {
      id: 40,
      album: "Shoot Out the Lights",
      artist: "Richard and Linda Thompson",
      year: "1982",
      cover:
        "https://cdn2.pitchfork.com/albums/25539/homepage_large.6f3d7294.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/4xX94uM6Kf972DJurGKnbb",
    },
    {
      id: 41,
      album: "Amnesia",
      artist: "Mr. Fingers",
      year: "1988",
      cover:
        "https://cdn.pitchfork.com/albums/25588/homepage_large.c9bfa856.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/201nAW1V2QI2jDbGci7K3g",
    },
    {
      id: 42,
      album: "The Indestructible Beat of Soweto",
      artist: "Various Artists",
      year: "1985",
      cover:
        "https://cdn2.pitchfork.com/albums/25513/homepage_large.247f2d87.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1DIr8JMRBnm1cZMYIGKb8t",
    },
    {
      id: 43,
      album: "British Steel",
      artist: "Judas Priest",
      year: "1980",
      cover:
        "https://cdn4.pitchfork.com/albums/25505/homepage_large.df28c452.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5bqtZRbUZUxUps8mrO9tGY",
    },
    {
      id: 44,
      album: "Lyte as a Rock",
      artist: "MC Lyte",
      year: "1988",
      cover:
        "https://cdn4.pitchfork.com/albums/25573/homepage_large.6f269b87.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2i8QflzkUsxQOhHHCiJiVm",
    },
    {
      id: 45,
      album: "Hotter Than July",
      artist: "Stevie Wonder",
      year: "1980",
      cover:
        "https://cdn3.pitchfork.com/albums/25572/homepage_large.c8d53b83.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2tO3rrZ6q3OjHJMGVo13dh",
    },
    {
      id: 47,
      album: "Radio",
      artist: "LL Cool J",
      year: "1985",
      cover:
        "https://cdn4.pitchfork.com/albums/25571/homepage_large.f4d0628d.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/4sevefzBUFvJYAzijVBQ2a",
    },
    {
      id: 48,
      album: "Dolmen Music",
      artist: "Meredith Monk",
      year: "1981",
      cover:
        "https://cdn2.pitchfork.com/albums/25498/homepage_large.20ec9692.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6XE64M0IdnyjddyZxAIVDh",
    },
    {
      id: 49,
      album: "II",
      artist: "Meat Puppets",
      year: "1984",
      cover:
        "https://cdn4.pitchfork.com/albums/25288/homepage_large.933cf96e.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5JFZRr2UTCkcuT5LSXSbJ9",
    },
    {
      id: 51,
      album: "The Well-Tuned Piano",
      artist: "La Monte Young",
      year: "1987",
      cover:
        "https://cdn4.pitchfork.com/albums/25540/homepage_large.09986d22.jpg",
      search_link:
        "https://www.google.com/search?q=La+Monte+Young+The+Well-Tuned+Piano+1987+album",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/669x0G4iMErE7BqgiGnPEl",
    },
    {
      id: 52,
      album: "Rapture",
      artist: "Anita Baker",
      year: "1986",
      cover:
        "https://cdn.pitchfork.com/albums/25570/homepage_large.0aa87940.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/1C7VOpm96d77zf5yaRqJ2u",
    },
    {
      id: 54,
      album: "In the Gardens Where We Feel Secure",
      artist: "Virginia Astley",
      year: "1983",
      cover:
        "https://cdn.pitchfork.com/albums/25587/homepage_large.2586905a.jpg",
      search_link:
        "https://www.google.com/search?q=Virginia+Astley+In+the+Gardens+Where+We+Feel+Secure+1983+album",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2c8Gm43Opcixkhs2aP9nuy",
    },
    {
      id: 55,
      album: "Grip It! On That Other Level",
      artist: "Geto Boys",
      year: "1989",
      cover:
        "https://cdn4.pitchfork.com/albums/25586/homepage_large.ee25792e.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3oTwRmf9prLusQM82wXKrN",
    },
    {
      id: 56,
      album: "Hi, How Are You: The Unfinished Album",
      artist: "Daniel Johnston",
      year: "1983",
      cover:
        "https://cdn4.pitchfork.com/albums/25569/homepage_large.548777a4.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2wZcpjsg8eNUVqY324mFu5",
    },
    {
      id: 57,
      album: "Sandinista!",
      artist: "The Clash",
      year: "1980",
      cover:
        "https://cdn3.pitchfork.com/albums/25585/homepage_large.6d7628e7.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2UxN3UKyS3Z5r0Sra8A5RF",
    },
    {
      id: 58,
      album: "Milo Goes to College",
      artist: "Descendents",
      year: "1982",
      cover:
        "https://cdn4.pitchfork.com/albums/25593/homepage_large.2384a514.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6IU592n49Rn36fpEmg9LIq",
    },
    {
      id: 60,
      album: "To Mega Therion",
      artist: "Celtic Frost",
      year: "1985",
      cover:
        "https://cdn4.pitchfork.com/albums/25509/homepage_large.276eee49.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7kNXhhELbmzx4fPoBLv1B8",
    },
    {
      id: 61,
      album: "The Cactus Album",
      artist: "3rd Bass",
      year: "1989",
      cover:
        "https://cdn3.pitchfork.com/albums/25518/homepage_large.a740f2dc.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3DdUJUcRBs6ct8omfRb0Pv",
    },
    {
      id: 63,
      album: "Long Live the Kane",
      artist: "Big Daddy Kane",
      year: "1988",
      cover:
        "https://cdn2.pitchfork.com/albums/25526/homepage_large.ca8a6092.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/5STvD2F7IQ51f4Cd2y5r3z",
    },
    {
      id: 65,
      album: "Raw Like Sushi",
      artist: "Neneh Cherry",
      year: "1989",
      cover:
        "https://cdn2.pitchfork.com/albums/25479/homepage_large.a33a8158.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/2AyJzvREOnlnYhaBzF1Kxp",
    },
    {
      id: 67,
      album: "Nothing's Shocking",
      artist: "Jane's Addiction",
      year: "1988",
      cover:
        "https://cdn4.pitchfork.com/albums/25291/homepage_large.0c8f1054.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/4DVBJPJyizvHfJQt5pYaCa",
    },
    {
      id: 68,
      album: "Skylarking",
      artist: "XTC",
      year: "1986",
      cover:
        "https://cdn3.pitchfork.com/albums/25330/homepage_large.b6460f5d.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3FVsJiQMI7dp0RfTBdWtMW",
    },
    {
      id: 69,
      album: "Steve McQueen",
      artist: "Prefab Sprout",
      year: "1985",
      cover:
        "https://cdn4.pitchfork.com/albums/25568/homepage_large.f1a15dca.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/00kb6JZ1mB5KcekOkz3KtH",
    },
    {
      id: 71,
      album: "Scientist Rids the World of the Evil Curse of the Vampires",
      artist: "Scientist",
      year: "1981",
      cover:
        "https://cdn2.pitchfork.com/albums/25567/homepage_large.09cfc819.jpg",
      search_link:
        "https://www.google.com/search?q=Scientist+Scientist+Rids+the+World+of+the+Evil+Curse+of+the+Vampires+1981+album",
      spotify_app_link: "https://open.spotify.com/album/3JSabOlXG0IiY0N5B2f2L8",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/3JSabOlXG0IiY0N5B2f2L8",
    },
    {
      id: 73,
      album: "Back in Black",
      artist: "AC/DC",
      year: "1980",
      cover:
        "https://cdn3.pitchfork.com/albums/25584/homepage_large.15970d47.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/6mUdeDZCsExyJLMdAfDuwh",
    },
    {
      id: 74,
      album: "Let's Dance",
      artist: "David Bowie",
      year: "1983",
      cover:
        "https://cdn3.pitchfork.com/albums/25565/homepage_large.4b835d1c.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/4NwG11AsDJluT732lSjMrV",
    },
    {
      id: 75,
      album: "Actually",
      artist: "Pet Shop Boys",
      year: "1987",
      cover:
        "https://cdn2.pitchfork.com/albums/25583/homepage_large.319f086b.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/7hkIf8sKiJKRjADB2xan74",
    },
    {
      id: 76,
      album: "Peter Gabriel",
      artist: "Peter Gabriel",
      year: "1980",
      cover:
        "https://cdn4.pitchfork.com/albums/25493/homepage_large.536328fe.jpg",
      link_api_spotify:
        "https://api.spotify.com/v1/albums/0LF0vWmmKRVPXoikpNkO5W",
    },
  ];

  let sections = [];
  for (let year = 1980; year <= 1989; year++) {
    const decadeAlbums = masterList.filter((album) => album.year == year);
    sections.push(
      <li key={year}>
        {" "}
        <Section decadeAlbums={decadeAlbums} year={year} />{" "}
      </li>
    );
  }
  return (
    <>
      <Navbar />
      <div className="mt-5 home-wrapper">
        <ul className="sections-list">{sections}</ul>
      </div>
      <div></div>
      <Footer />
    </>
  );
};
