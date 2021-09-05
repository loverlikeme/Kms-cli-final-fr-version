import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function FirstPage({navigation}) {
    const [seconds, setSeconds] = React.useState(5);

    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        navigation.navigate('GettingStarted')
      }
    });
    return (
        <LinearGradient
        colors={['#1F79CD', '#00213E']}
        style={styles.container}
        >
            <Image  
                style={styles.logo}
                source={require('../../assets/images/logo.png')} 
            />
            <Image    
                style={styles.kms}
                source={require('../../assets/images/kms.png')} 
            />
        </LinearGradient>

    );
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    logo: {
      width: 100, 
      height: 100,
      top: '40%',
      alignSelf: 'center'
    },
    kms: {
      width: 70,
      height: 30,
      top: '75%',
      alignSelf: 'center'  
    },
  });