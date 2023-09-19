// assets
import { IconDashboard, IconReportAnalytics} from '@tabler/icons';

const icons = {
    IconDashboard, IconReportAnalytics    
};

// ==============================|| MENU ITEMS - perfil1Agenda ||============================== //

const perfil3Informes = {
    id: 'perfil3Informes',
    title: 'Informes',
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'agenda',
            title: 'Agenda',
            type: 'collapse',
            icon: icons.IconReportAnalytics,
            children: [
                {
                    id: 'reservas',
                    title: 'Reservas',
                    type: 'item',
                    url: '/sample-page',
                },
                {
                    id: 'pagos',
                    title: 'Pagos',
                    type: 'item',
                    url: '/sample-page',
                }
            ]
        }
    ]
};

export default perfil3Informes;
