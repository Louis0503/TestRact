// 這邊引入了 fetch 的 polyfill，考以讓舊的瀏覽器也可以使用 fetch
import 'whatwg-fetch';
// 引入 actionTypes 常數
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  CHAGE_USER_ID,
} from '../constants/actionTypes';

// 引入 uiActions 的 action
import {
  showSpinner,
  hideSpinner,
} from './uiActions';

