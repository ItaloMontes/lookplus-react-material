// assets
import { IconDashboard} from '@tabler/icons';

const icons = {
    IconDashboard    
};

// ==============================|| MENU ITEMS - perfil1Ajustes ||============================== //

const perfil1Ajustes = {
    id: 'perfil1Ajustes',
    title: 'Ajustes',
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'seguridad',
            title: 'Seguridad',
            type: 'collapse',
            icon: icons.IconDashboard,
            children: [
                {
                    id: 'perfiles',
                    title: 'Perfiles',
                    type: 'item',
                    url: '/sample-page',
                },
                {
                    id: 'opciones',
                    title: 'Opciones',
                    type: 'item',
                    url: '/sample-page',
                }
            ]
        },
        {
            id: 'usuarios',
            title: 'Usuarios',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconDashboard,
            children: [
                {
                    id: 'administracion',
                    title: 'Administracion',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                    
                }
            ]
        }
    ]
};

export default perfil1Ajustes;
