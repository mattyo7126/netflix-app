import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import YouTube from 'react-youtube';
import axios from '../axios';
import { getVideos } from '../features/movie/getVideos';
import { Movie } from '../features/movie/types';
import './Row.scss';

const base_url = 'https://image.tmdb.org/t/p/original';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

//trailerのoption
type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    setTrailerUrl('');
    try {
      const { results } = await getVideos(movie);
      if (results.length >= 1 && results[0].key) {
        setTrailerUrl(results[0].key);
        return;
      }
      toast(`"${movie.name}"'s video dose not exist.`, {
        type: toast.TYPE.ERROR,
      });
    } catch (error) {
      const message = typeof error === 'string' ? error : 'Unknown error.';
      toast(`Failed to get "${movie.name}"'s video. ${message}`, {
        type: toast.TYPE.ERROR,
      });
    }
  };

  return movies.length <= 0 ? null : (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie, index) => {
          return !isLargeRow && !movie.backdrop_path ? (
            <div key={index} className="Row-movie-name-box">
              <div className="Row-movie-name">
                <p>{movie.name}</p>
              </div>
            </div>
          ) : (
            <img
              key={movie.id}
              className={`Row-poster ${isLargeRow && 'Row-poster-large'}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
