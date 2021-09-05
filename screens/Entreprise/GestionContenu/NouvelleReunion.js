import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Clipboard } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import axios from 'react-native-axios';

export default function NouvelleReunion() {
    const [visible, setVisible] = useState(false);
    const [copiedText, setCopiedText] = useState('')
    const [reunion, setReunion] = useState([])
    useEffect( () => {}, [reunion])
    axios.get("http://10.0.2.2:8000/api/cours/reunion/1")
    .then((res) => {
        setReunion(res.data);
    }).catch((err) => {
        console.log(err);
    })


    const copyToClipboard = (e) => {
        Clipboard.setString(e)
      }

    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                    <View style={{width: '6%'}}/>
                    <Feather name="link" size={24} color="white"  />
                    <Text style={styles.buttonText}>Ajouter lien</Text>
            </TouchableOpacity>
                { reunion.map((u,i) => {
                    return(
            <TouchableOpacity style={styles.button1} onPress={() => copyToClipboard(u.link)}>
                    <View style={{width: '10%'}}/>
                    <Text style={styles.buttonText1}>{u.link}</Text>
                    <Feather name="copy" size={35} color="#9369C3" />
            </TouchableOpacity>
            );})}
            <Dialog
                visible={visible}
                onTouchOutside={() => {
                setVisible(false );
                }}
                style={{backgroundColor:"#153256"}}
            >
                <DialogContent >
                    <Text style={{fontFamily:"Montserrat", fontWeight:"bold",fontSize:26, color:"#2B2465", marginTop:10}}>Ajouter lien</Text>
                    <TextInput style={{width:250, height:40, borderWidth:0.2, borderRadius:10, marginBottom:20, marginTop:10}} placeholder="Lien de la réunion!" />
                    <View style={{raw:1, flex:1, alignItems:"right"}}>
                    <TouchableOpacity style={{backgroundColor:"#9599B3", borderRadius:50, width:"30%", height:"80%"}}><Text style={{textAlign:"center", paddingTop:6, fontSize:14, fontFamily:"Montserrat", fontWeight:"500", color:"white"}}>Ajouter</Text></TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"#4B4394", borderRadius:50, width:"30%", height:"80%", marginLeft:90, marginTop:-33, marginBottom:30}} ><Text style={{textAlign:"center", paddingTop:6, fontSize:14, fontFamily:"Montserrat", fontWeight:"500", color:"white"}}>Annuler</Text></TouchableOpacity>
                    </View>
                </DialogContent>
            </Dialog>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      width: '100%'
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
    button1: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        elevation: 3,
        marginTop: 30,
        borderColor: "#000000",
        borderWidth: 0.2
    },
    buttonText: {
        flex:1,
        color: "white",
        fontWeight: 'bold',
        flexDirection:'row',
        paddingLeft: '20%'
    },
    buttonText1: {
        flex:1,
        color: "#000000",
        fontWeight: 'bold',
        flexDirection:'row',
    },
});