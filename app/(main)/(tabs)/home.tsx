import {View, Text, Button, StyleSheet} from 'react-native';

import {DrawerActions, useNavigation as useNavigation2} from "@react-navigation/native";

export default function HomeScreen({navigation}: any) {
    const navigation2 = useNavigation2();

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>


            <Button
                title="OPEN DRAWER"
                onPress={() => navigation2.dispatch(DrawerActions.openDrawer())}
            />

            <Button
                title="Go to Details (Main) details screen"

                onPress={() =>
                    // @ts-ignore
                    navigation2.navigate('settings')
                }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});