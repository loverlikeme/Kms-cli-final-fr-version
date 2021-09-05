import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, ScrollView} from 'react-native';
import axios from 'react-native-axios';
import Styles from './Styles';
import Quiz from '../../../../../components/GestionContenu/Quiz';
import CircularButton from '../../../../../components/GestionContenu/CircularButton';


function MCQuiz({navigation, route}) {
    const {role} = route.params
    const [quiz, setQuiz] = useState([]);
    useEffect( () => {}, [quiz])
    axios.get("http://10.0.2.2:8000/api/qcm/2")
    .then((res) => {
        setQuiz(res.data);
    }).catch((err) => {
        console.log(err);
    })
    console.log(role);
    return (
        <ScrollView style={Styles.container}>
            <ImageBackground 
                source={require('../../../../../assets/images/auth_background.png')} 
                resizeMode="cover" 
                style={Styles.image}
            >
                { quiz.map((u,i) => {
                    return (
                <Quiz key={i} qst={u.question} rep1={u.rep1} rep2={u.rep2} rep3={u.rep3} rep4={u.rep4}/>
    );})}
             {(role=='formateur' || role=='entreprise')?  
            <CircularButton onPress={() => navigation.navigate('createQuiz')} width={80} height={80} />
              :<View />
            }  
            </ImageBackground>
        </ScrollView>
    );
}

export default MCQuiz