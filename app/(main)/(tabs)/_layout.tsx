import {Tabs} from 'expo-router/tabs';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{headerShown: false}}
        >
            <Tabs.Screen name="home" options={{title: 'Home'}}/>
            <Tabs.Screen name="profile" options={{title: 'Profile'}}/>
        </Tabs>
    );
}