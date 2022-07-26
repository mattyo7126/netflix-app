export type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

// Videos API 関連の型定義
// API 仕様: https://developers.themoviedb.org/3/movies/get-movie-videos
export namespace Videos {
  export type Res200Result = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  };

  export type Res200 = {
    id: number;
    results: Res200Result[];
  };

  export type Res401 = {
    status_message: string;
    success?: boolean; //Schemaには書いてないけどExampleには書いてある
    status_code: number;
  };

  export type Res404 = {
    status_message: string;
    status_code: number;
  };

  export type FetchError = {
    status_message: string;
  };
}
