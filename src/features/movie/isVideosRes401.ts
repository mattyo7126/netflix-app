import { Videos } from './types';

// ユーザー定義のType Guard
// https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#yznotype-guard
export const isVideosRes401 = (arg: any): arg is Videos.Res401 => {
  if (arg === null || typeof arg !== 'object') {
    console.log('isVideosRes401-err-1');
    return false;
  }

  if (
    typeof arg.status_message !== 'string' ||
    (typeof arg.success !== 'undefined' && typeof arg.success !== 'boolean') ||
    typeof arg.status_code !== 'number'
  ) {
    console.log('isVideosRes401-err-2');
    return false;
  }

  return true;
};
