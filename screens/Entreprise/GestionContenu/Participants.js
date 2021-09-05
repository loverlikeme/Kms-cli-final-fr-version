import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function Participants(props) {
    const x =props.image;

    return (
        <View style={styles.participant}>
            <Image
                style= {styles.image}
                source={x} 
            />
            <View
                style={styles.infos}
            >
                <Text style={styles.name}>
                    {props.name}
                </Text>
                <Text style={styles.role}>
                    {props.role}
                </Text>
            </View>
        </View>
    );
}

export default Participants

const styles = StyleSheet.create({
    participant: {
        borderWidth: 0.5,
        borderColor: '#707070',
        width:'90%',
        alignSelf: 'center',
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius: 10, 
        margin: 10
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 40,
        margin: 10
    },
    infos: {
        flexDirection: 'column'     
    },
    name: {
        color: "#3E3F68",
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    }, 
    role: {
        marginLeft: 10,
        marginTop: 5,
        color: "#6E7FAA"
    }
});