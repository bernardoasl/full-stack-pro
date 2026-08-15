import { useEffect, useState } from "react";
import api from "../../services/api";

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
