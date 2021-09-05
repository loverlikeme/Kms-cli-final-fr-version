import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import axios from "react-native-axios"


function ProgramInformation({role}) {
//    const getinfo = async () => {
//     let myUrl = "http://";
//     // useEffect(() => {
//     // }, [formation])
//    await axios.get(myUrl+"10.0.2.2:8000/api/programinformation/1")
//     .then((res) => {
//         setFormation(res.data);
//     }).catch((err)=> {
//         console.log(err);
//     })
//     }
//     const [formation, setFormation] = useState([]);
//     getinfo();
//     console.log(formation);
    return (
        <View style={styles.container}>
        <View>
            <View style={styles.square}>
                <View style={styles.info}>
                    <Text style={styles.title}>Titre :</Text>
                    <Text style={styles.description}></Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Durée :</Text>
                    <Text style={styles.description}>h</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Date Début :</Text>
                    <Text style={styles.description}></Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Date Fin :</Text>
                    <Text style={styles.description}></Text>
                </View>
                <View style={{
                    paddingTop: '1%',
                }}>
                    <Text style={styles.title}>Description :</Text>
                    <Text style={{
                        fontFamily: 'Josefin Sans',
                        textAlign: 'justify',
                        fontSize: 14,
                        color: '#5C5C63',
                        paddingTop: '2%'    
                    }}></Text>
                </View>
                {(role == 'formateur' || role == 'entreprise')
                ?<TouchableOpacity style={styles.button}>
                    <View style={{width: '6%'}}/>
                    <Feather name="edit" size={24} color="white" />
                    <Text style={styles.buttonText}>Editer</Text>
                </TouchableOpacity>:<View/>
                }
            </View> 
            </View>
        </View>
    );
}

export default ProgramInformation

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#F8F8F8',
      width: '100%'
    },
    square: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        marginTop: '30%',
        paddingHorizontal: '5%',
        paddingVertical: '20%',
        borderRadius: 20,
        shadowColor: '#1AA5E2',
        shadowOpacity: 0.7,
        shadowOffset: { width: 10, height: 10},
        shadowRadius: 10,
        elevation: 3,
    },
    info: {
        flexDirection: 'row',
        paddingVertical: '2%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Josefin Sans',
        flexDirection: 'row',
    },
    description: {
        position: 'absolute',
        left: '38%',
        fontSize: 20,
        fontFamily: 'Josefin Sans',
        flexDirection: 'row',
        color: '#5C5C63',
    },
    button: {
        backgroundColor: "#1AA5E2",
        padding: 10,
        borderRadius: 30,
        width: '50%',
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: '#1AA5E2',
        shadowOpacity: 0.7,
        shadowOffset: { width: 10, height: 10},
        shadowRadius: 10,
        elevation: 3,
        marginTop: 30
    },
    buttonText: {
        flex:1,
        color: "white",
        fontWeight: 'bold',
        flexDirection:'row',
        paddingLeft: '20%'
    },
});