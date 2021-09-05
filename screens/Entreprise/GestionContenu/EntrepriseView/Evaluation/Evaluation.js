import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import Styles from './Styles';


export default function Evaluation({navigation, role}) {
    return (
        <View style={Styles.container}>
            <View style={Styles.btn}>
                <Text style={Styles.title} onPress={() => {navigation.navigate('MCQuiz', {role: role,}); }}>Quiz</Text>
                <LottieView 
                    style={{width: '100%'}}
                    source={require('../../../../../assets/quiz.json')} 
                    autoPlay loop
                />
            </View>
            <View style={Styles.btn}>
                <Text style={Styles.title} onPress={() => {navigation.navigate('Homework',{role:role,});}}>Travaux</Text>
                <LottieView 
                    style={{width: '80%'}}
                    source={require('../../../../../assets/homework.json')} 
                    autoPlay loop
                />
            </View>
        </View>
    );
}