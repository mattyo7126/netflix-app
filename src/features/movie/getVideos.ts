import axios from '../../axios';
import { requests } from '../../request';
import { isVideosRes200 } from './isVideosRes200';
import { isVideosRes401 } from './isVideosRes401';
import { isVideosRes404 } from './isVideosRes404';
import { Movie, Videos } from './types';

export const getVideos = async (movie: Movie) => {
  return new Promise<Videos.Res200>((resolve, reject) => {
    // API仕様: https://developers.themoviedb.org/3/movies/get-movie-videos
    axios
      .get(requests.feactVideos(movie.id))
      .then(({ data }) => {
        // レスポンスが200のみが成功とする
        if (isVideosRes200(data)) {
          resolve(data);
          return;
        }

        // 正規エラー（レスポンスとしては成功だがUIの要件としては失敗扱い）
        if (isVideosRes401(data) || isVideosRes404(data)) {
          reject(data.status_message);
          return;
        }
        // 型定義外のレスポンス
        reject(data?.status_message ?? 'Unknown error.');
      })
      .catch((err) => {
        reject(err?.message ?? 'Unknown error.');
      });
  });
};
