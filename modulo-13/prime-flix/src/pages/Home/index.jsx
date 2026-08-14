import { useEffect, useState } from "react";
import api from "../../services/api";

// URL DA API: /movie/now_playing?api_key=ebee854b08c607d030383ea49a9ed5c3&language=pt-BR

export default function Home(){
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: import.meta.env.VITE_TMDB_API_KEY,
          language: "pt-BR",
          page: 1,
        }
      });

      console.log(response.data.results);

    }

    loadFilmes();

  }, [])

  return(
    <div>
      <h1>BEM VINDO A HOME</h1>
    </div>
  )
}