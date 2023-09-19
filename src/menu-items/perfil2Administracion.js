// assets
import { IconDashboard, IconBuildingStore, IconArmchair2} from '@tabler/icons';

const icons = {
    IconDashboard, IconBuildingStore, IconArmchair2
};

// ==============================|| MENU ITEMS - perfil1Administracion ||============================== //

const perfil2Administracion = {
    id: 'perfil2Administracion',
    title: 'Administracion',
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'locales',
            title: 'Locales',
            type: 'collapse',
            icon: icons.IconBuildingStore,
            children: [
                {
                    id: 'informacionGeneral',
                    title: 'Informacion General',
                    type: 'item',
                    url: '/sample-page',
                },
                {
                    id: 'imagenes',
                    title: 'Imagenes',
                    type: 'item',
                    url: '/sample-page',
                }
            ]
        },
        {
            id: 'sillasFuncionarios',
            title: 'Sillas - Funcionarios',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconArmchair2,
            children: [
                {
                    id: 'gestionFuncionarios',
                    title: 'Gestion Funcionarios',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                    
                },
                {
                    id: 'gestionSillas',
                    title: 'Gestion Sillas',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default perfil2Administracion;
