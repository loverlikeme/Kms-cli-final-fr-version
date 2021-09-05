import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Homework(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}> 
            <Text style={styles.buttonText}>{props.title}</Text>
            <AntDesign name="downcircle" size={24} color="black" />
        </TouchableOpacity>
    );
}

export default Homework

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 10, height: 10},
        shadowRadius: 10,
        elevation: 3,
        marginTop: 30
    },
    buttonText: {
        flex:1,
        color: "black",
        fontWeight: 'bold',
        flexDirection:'row',
        textAlign: 'center',
        fontFamily: 'Josefin Sans',
    }
});
