import { useEffect } from "react";
import { useParams } from "react-router-dom";

// TODO : 로딩, 상태에 json 넣어서 이용

function Detail() {
  const { movieId } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
      )
    ).json();

    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
