// Sample Screens
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from "expo-router";


export default function LoginScreen() {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button
                title="Login"
                // onPress={() => navigation.navigate('Main', {screen: 'Home'})}
                onPress={() => navigation.navigate('index2')}
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