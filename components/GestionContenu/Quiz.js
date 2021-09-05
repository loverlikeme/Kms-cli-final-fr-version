import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function Quiz(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.qst}</Text>
            <View style={styles.answers}>
                <View style={styles.wrongAnswer}>
                    <Text style={styles.textWrongAnswer}>{props.rep1}</Text>
                </View>
                <View style={styles.wrongAnswer}>
                    <Text style={styles.textWrongAnswer}>{props.rep2}</Text>
                </View>
                <View style={styles.wrongAnswer}>
                    <Text style={styles.textWrongAnswer}>{props.rep3}</Text>
                </View>
                <View style={styles.correctAnswer}>
                    <Text style={styles.textCorrectAnswer}>{props.rep4}</Text>
                </View>
            </View>
        </View>
    );
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginHorizontal: '10%',
        marginVertical: '5%',
        padding: '2%',
        borderRadius: 5,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    answers: {

    },
    wrongAnswer: {
        borderWidth: 0.2,
        borderColor: '#5663FF',
        margin: '3%',
        padding: '3%',
        borderRadius: 1,
    },
    textWrongAnswer: {
        color: '#5663FF',
        fontSize: 18
    },
    correctAnswer:{
        backgroundColor: '#5663FF',
        margin: '3%',
        padding: '3%',
        borderRadius: 1,
    },
    textCorrectAnswer: {
        color: 'white',
        fontSize: 18
    }
});
