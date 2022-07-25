import { isVideosRes200Result } from './isVideosRes200Result';
import { Videos } from './types';

// ユーザー定義のType Guard
// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
export const isVideosRes200 = (arg: any): arg is Videos.Res200 => {
  if (arg === null || typeof arg !== 'object') {
    console.log('isVideosRes200-err-1');
    return false;
  }

  if (typeof arg.id !== 'number') {
    console.log('isVideosRes200-err-2');
    return false;
  }

  if (
    arg.results === null ||
    typeof arg.results !== 'object' ||
    !Array.isArray(arg.results) ||
    !arg.results.every(isVideosRes200Result)
  ) {
    console.log('isVideosRes200-err-3');
    return false;
  }

  return true;
};
