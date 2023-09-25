import { createSlice } from '@reduxjs/toolkit';

// project imports

import { dispatch } from '../index';

// import axios from 'utils/axios';
import axios from 'utils/axiosDummy';

// initial state
const initialState = {
    selectedItem: ['dashboard'],
    selectedID: null,
    drawerOpen: false,
    error: null,
    menu: {}
};

//Obtener ruta json del menu
import configDummy from 'utils/locales/configDummy.json';
var urlJson = null;

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        activeItem(state, action) {
            state.selectedItem = action.payload;
        },

        activeID(state, action) {
            state.selectedID = action.payload;
        },

        openDrawer(state, action) {
            state.drawerOpen = action.payload;
        },

        // has error
        hasError(state, action) {
            state.error = action.payload;
        },

        // get dashboard menu
        getMenuSuccess(state, action) {
            state.menu = action.payload;
        }
    }
});

export default menu.reducer;

export const { activeItem, openDrawer, activeID } = menu.actions;

export function getMenu() {
    return async () => {
        try {


            
            switch(configDummy.perfil.tipoPerfil) {
                case "1":
                    urlJson = '/json/menuPerfil1.json';
                  break;
                case "2":
                    urlJson = '/json/menuPerfil2.json';
                  break;
                  case "3":
                    urlJson = '/json/menuPerfil3.json';
                  break;
                default:
                    urlJson = '/json/menuPerfil3.json';
              }



            const response = await axios.get(urlJson); 
            //const response = await axios.get('/api/menu/widget');
            dispatch(menu.actions.getMenuSuccess(response.data.widget));

        } catch (error) {
            dispatch(menu.actions.hasError(error));
        }
    };
}
