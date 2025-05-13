import {Drawer} from 'expo-router/drawer';

export default function MainLayout() {
    return (
        <Drawer>
            <Drawer.Screen name="(tabs)" options={{drawerLabel: 'Home'}}/>
            <Drawer.Screen name="settings" options={{drawerLabel: 'Settings'}}/>
        </Drawer>
    );
}