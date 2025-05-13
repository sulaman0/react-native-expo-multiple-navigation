import {View, Text, Button, StyleSheet} from 'react-native';

export default function DetailsScreen({navigation}: any) {
    return (
        <View style={styles.container}>
            <Text>Details Screen 0001</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
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