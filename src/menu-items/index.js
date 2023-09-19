import dashboard from './dashboard';
import application from './application';
import forms from './forms';
import elements from './elements';
import samplePage from './sample-page';
import pages from './pages';
import utilities from './utilities';
import support from './support';
import other from './other';

import perfil1Administracion from './perfil1Administracion';
import perfil1Ajustes from './perfil1Ajustes';
import configDummy from 'utils/locales/configDummy.json';

// ==============================|| MENU ITEMS ||============================== //
var menuItemsAux = {
    items: []
};

switch(configDummy.perfil.tipoPerfil) {
    case "1":
        menuItemsAux = {
          items: [perfil1Administracion, perfil1Ajustes]
        };
      break;
    case "2":
        menuItemsAux = {
            items: [dashboard]
        };
      break;
      case "3":
        menuItemsAux = {
            items: [dashboard, application, forms, elements, samplePage, pages, utilities, support, other]
        };
      break;
    default:
        menuItemsAux = {
          items: [dashboard, application, forms, elements, samplePage, pages, utilities, support, other]
        };
  }

const menuItems = menuItemsAux;

export default menuItems;
