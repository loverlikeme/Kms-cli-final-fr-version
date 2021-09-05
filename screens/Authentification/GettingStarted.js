import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';


function GettingStarted({navigation}) {

    const [seconds, setSeconds] = React.useState(5);

    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        navigation.navigate('Login')
      }
    });

    return (
        <View style={styles.container}>
            <LottieView 
                style={styles.header}
                source={require('../../assets/loading.json')} 
                autoPlay loop
            />
            <View 
                // style={styles.square}
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    width: '100%',
                    top: '40%',
                    bottom: '0%',
                    height: '60%',
                    backgroundColor: '#00437F',
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50
                }}   
            >
                <Text style={[styles.title, {
                    color: "#fff"
                }]}>" Quand la formation requise est en adéquation avec l'emploi obtenu, la compétence sera au service du progrès "</Text>
                <Text style={styles.text}>Jacques Le Goff</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    console.log('ddddddddddd')
                }}> 
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Commencer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GettingStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        paddingTop: '10%',
        margin: '10%',
        textAlign: 'justify',
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        marginRight: '10%',
        marginBottom: '10%',
        color: "#fff",
        textAlign: 'right',
    },
    button: {
        backgroundColor: "#1AA5E2",
        padding: 10,
        borderRadius: 30,
        alignSelf: 'flex-end',
        flexDirection:'row',
        marginRight: '10%'
    },
    buttonText: {
        color: "white",
        fontWeight: 'bold',
        flexDirection:'row',
    },
    header: {
        flex: 1,
        marginTop: -175,
    },
});