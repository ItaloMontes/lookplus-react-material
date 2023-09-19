import LAYOUT_CONST from 'constant';

import configDummy from 'utils/locales/configDummy.json';
var dashBoardPathAux = null;

switch(configDummy.perfil.tipoPerfil) {
    case "1":
        dashBoardPathAux = '/utils/util-typography';
      break;
    case "2":
        dashBoardPathAux = '/advance/snackbar';
      break;
      case "3":
        dashBoardPathAux = '/basic/accordion';
      break;
    default:
        dashBoardPathAux = '/dashboard/default';
  }

export const DASHBOARD_PATH = dashBoardPathAux;
export const HORIZONTAL_MAX_ITEM = 7;

const config = {
    layout: LAYOUT_CONST.VERTICAL_LAYOUT, // vertical, horizontal
    drawerType: LAYOUT_CONST.DEFAULT_DRAWER, // default, mini-drawer
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 8,
    outlinedFilled: true,
    navType: 'light', // light, dark
    presetColor: 'default', // default, theme1, theme2, theme3, theme4, theme5, theme6
    locale: 'en', // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
    rtlLayout: false,
    container: false
};

export default config;
