// third-party
import { FormattedMessage } from 'react-intl';

// project import
import { useSelector } from 'store';

// assets
import { IconChartArcs,
         IconClipboardList,
         IconChartInfographic,
         IconPackage,
         IconBuildingWarehouse,
         IconAffiliate,
         IconCheckupList,
         IconShieldLock,
         IconUsers,
         IconReportAnalytics,
         IconNotebook,
         IconCalendarTime,
         IconBuildingStore,
         IconArmchair2  } from '@tabler/icons';

const icons = {
    widget: IconChartArcs,
    statistics: IconChartArcs,
    data: IconClipboardList,
    chart: IconChartInfographic,
    IconPackage: IconPackage,
    IconBuildingWarehouse: IconBuildingWarehouse,
    IconAffiliate: IconAffiliate,
    IconCheckupList: IconCheckupList,
    IconShieldLock: IconShieldLock,
    IconUsers: IconUsers,
    IconReportAnalytics: IconReportAnalytics,
    IconNotebook: IconNotebook,
    IconCalendarTime: IconCalendarTime,
    IconBuildingStore: IconBuildingStore,
    IconArmchair2: IconArmchair2

};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
    const { menu } = useSelector((state) => state.menu);

    const SubChildrenLis = (subChildrenLis) =>
        subChildrenLis?.map((subList) => ({
            ...subList,
            title: subList.title,
            icon: icons[subList.icon]
        }));

    const menuItem = (subList) => {
        const list = {
            ...subList,
            title: subList.title,
            icon: icons[subList.icon]
        };

        if (subList.type === 'collapse') {
            list.children = SubChildrenLis(subList.children);
        }
        return list;
    };

    const withoutMenu = menu?.children?.filter((item) => item.id !== 'no-menu');

    const ChildrenList = withoutMenu?.map((subList) => menuItem(subList));

    const menuList = {
        ...menu,
        title: menu.title,
        icon: icons[menu.icon],
        children: ChildrenList
    };

    return menuList;
};
