console.log(
  'process.env.REACT_APP_TMDB_API_KEY:',
  process.env.REACT_APP_TMDB_API_KEY,
);

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  feactVideos: (movieId: string): string =>
    `/movie/${movieId}/videos?api_key=${API_KEY}`,
};
