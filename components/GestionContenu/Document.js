import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

function Document() {
    return (
        <TouchableOpacity style={styles.button}> 
            <Text style={styles.buttonText}>DocScanner-07-fvr.-2021-11_153.pdf</Text>
            <Image  
                source={require('../../assets/images/doc.png')} 
            />
        </TouchableOpacity>
    );
}

export default Document

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        borderColor: 'black',
        borderWidth: 0.3,
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
