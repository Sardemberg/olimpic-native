import { View, Text, Button } from 'react-native';

export default function Login({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Ver jogadores"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}