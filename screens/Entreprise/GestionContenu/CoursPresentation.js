import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import axios from 'react-native-axios';

export default function CoursPresentation({route}) {
    //const {itemId} = route.params;
    const itemId =1;
    const [pres, setPres] = useState([]);
    useEffect(() => {}, [pres])
    axios.get("http://10.0.2.2:8000/api/cours/specific/"+itemId) 
    .then((res) => {
        setPres(res.data);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <View style={styles.container}>
            <View style={styles.square}>
                <View style={styles.info}>
                    <Text style={styles.title}>Titre :</Text>
                    {/* <Text style={styles.description}>{pres[0]['titre']}</Text> */}
                    <Text style={styles.description} >BuzzCut Season</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Jour :</Text>
                    {/* <Text style={styles.description}>{pres[0]['jour']}</Text> */}
                    <Text style={styles.description} >31/08/2021</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Heure Début :</Text>
                    {/* <Text style={styles.description}>{pres[0]['heure_debut']}</Text> */}
                    <Text style={styles.description}>19:00:00</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Heure Fin :</Text>
                    {/* <Text style={styles.description}>{pres[0]['heure_fin']}</Text> */}
                    <Text style={styles.description}>21:00:00</Text>
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
                    // }}>{pres[0]['description']}</Text>
                    }}>Midnight, we're fadin'
                    'Til daylight, we're jaded
                    We know that it's over
                    In the mornin', you'll be dancin' with all the heartache
                    And the treason, the fantasies of leavin'
                    But we know that, when it's over
                    In the mornin', you'll be dancin' with us</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
        shadowColor: '#968585',
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
        left: '42%',
        fontSize: 20,
        fontFamily: 'Josefin Sans',
        flexDirection: 'row',
        color: '#5C5C63',
    },
});