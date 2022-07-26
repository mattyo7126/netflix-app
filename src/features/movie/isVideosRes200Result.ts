import { Videos } from './types';

// ユーザー定義のType Guard
// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
export const isVideosRes200Result = (arg: any): arg is Videos.Res200Result => {
  if (arg === null || typeof arg !== 'object') {
    console.log('isVideosRes200Result-err-1');
    return false;
  }

  if (
    typeof arg.iso_639_1 !== 'string' ||
    typeof arg.iso_3166_1 !== 'string' ||
    typeof arg.name !== 'string' ||
    typeof arg.key !== 'string' ||
    typeof arg.site !== 'string' ||
    typeof arg.size !== 'number' ||
    typeof arg.type !== 'string' ||
    typeof arg.official !== 'boolean' ||
    typeof arg.published_at !== 'string' ||
    typeof arg.id !== 'string'
  ) {
    console.log('isVideosRes200Result-err-2');
    return false;
  }

  return true;
};
