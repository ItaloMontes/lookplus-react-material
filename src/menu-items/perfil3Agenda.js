// assets
import { IconDashboard, IconNotebook, IconCalendarTime} from '@tabler/icons';

const icons = {
    IconDashboard, IconNotebook, IconCalendarTime    
};

// ==============================|| MENU ITEMS - perfil1Agenda ||============================== //

const perfil3Agenda = {
    id: 'perfil3Agenda',
    title: 'Agenda',
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'gestion',
            title: 'Gestion',
            type: 'collapse',
            icon: icons.IconNotebook,
            children: [
                {
                    id: 'creacionAgenda',
                    title: 'Creacion de Agenda',
                    type: 'item',
                    url: '/sample-page',
                },
                {
                    id: 'administracionSillas',
                    title: 'Administracion Sillas',
                    type: 'item',
                    url: '/sample-page',
                }
            ]
        },
        {
            id: 'reservas',
            title: 'Reservas',
            type: 'collapse',
            url: '/sample-page',
            icon: icons.IconCalendarTime,
            children: [
                {
                    id: 'gestionReservas',
                    title: 'Gestion de Reservas',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                    
                },
                {
                    id: 'cerrarReserva',
                    title: 'Cerrar Reserva',
                    type: 'item',
                    url: '/sample-page',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default perfil3Agenda;
