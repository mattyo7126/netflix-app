import { Videos } from './types';

// ユーザー定義のType Guard
// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
export const isVideosRes404 = (arg: any): arg is Videos.Res404 => {
  if (arg === null || typeof arg !== 'object') {
    console.log('isVideosRes404-err-1');
    return false;
  }

  if (
    typeof arg.status_message !== 'string' ||
    typeof arg.status_code !== 'number'
  ) {
    console.log('isVideosRes404-err-2');
    return false;
  }

  return true;
};
