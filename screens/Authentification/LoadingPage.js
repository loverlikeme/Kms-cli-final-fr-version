import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import LottieView from 'lottie-react-native';

function LoadingPage({navigation}) {
    const [seconds, setSeconds] = React.useState(5);

    useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        navigation.navigate('Liaison')
      }
    });
    return (
        <LottieView 
            source={require('../../assets/loading.json')} 
            autoPlay loop
        />
    )
}

export default LoadingPage

const styles = StyleSheet.create({
    container: {
    },
  });