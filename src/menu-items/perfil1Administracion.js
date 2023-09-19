// assets
import { IconDashboard, IconPackage, IconBuildingWarehouse, IconAffiliate, IconCheckupList} from '@tabler/icons';

const icons = {
    IconDashboard, IconPackage,IconBuildingWarehouse, IconAffiliate, IconCheckupList   
};

// ==============================|| MENU ITEMS - perfil1Administracion ||============================== //

const perfil1Administracion = {
    id: 'perfil1Administracion',
    title: 'Administracion',
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'planes',
            title: 'Planes',
            type: 'collapse',
            icon: icons.IconPackage,
            children: [
                {
                    id: 'administrarPlanes',
                    title: 'Administrar Planes',
                    type: 'item',
                    url: '/sample-page',
                },
                {
                    id: 'planesEspeciales',
                    title: 'Planes Especiales',
                    type: 'item',
                    url: '/sample-page',
                }
            ]
        },
        {
            id: 'instituciones',
            title: 'Instituciones',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconBuildingWarehouse,
            children: [
                {
                    id: 'creacion',
                    title: 'Creacion',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                    
                },
                {
                    id: 'locales',
                    title: 'Locales',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                },
                {
                    id: 'administracion',
                    title: 'Administracion',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                },
                {
                    id: 'pagos',
                    title: 'Pagos',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'servicios',
            title: 'Servicios',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconAffiliate,
            children: [
                {
                    id: 'gestionServicios',
                    title: 'Gestion Servicios',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'gestion',
            title: 'Gestion',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconCheckupList,
            children: [
                {
                    id: 'pagos',
                    title: 'Pagos',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                },
                {
                    id: 'informes',
                    title: 'Informes',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default perfil1Administracion;
