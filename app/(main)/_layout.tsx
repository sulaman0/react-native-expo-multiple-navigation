import {Drawer} from 'expo-router';

export default function MainLayout() {
    return (
        <Drawer>
            <Drawer.Screen name="(tabs)" options={{drawerLabel: 'Home'}}/>
            <Drawer.Screen Tarname="settings" options={{drawerLabel: 'Settings'}}/>
        </Drawer>
    );
}