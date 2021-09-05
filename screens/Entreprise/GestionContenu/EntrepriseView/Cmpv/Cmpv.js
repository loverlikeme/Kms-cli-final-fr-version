import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView} from 'react-native';
import CircularButton from '../../../../../components/GestionContenu/CircularButton';
import axios from 'react-native-axios';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

import Styles from './Styles';
import { TextInput } from 'react-native-gesture-handler';
import ValidationButtonBlue from '../../../../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';

function Cmpv({role}) {
    const [cmpv, setCmpv] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect( () => {
    }, [cmpv])
    axios.get("http://10.0.2.2:8000/api/cmpv/1")
    .then((res) => {
        setCmpv(res.data);
    }).catch((err) => {
        console.log(err);
    })
    return (
        <View style={Styles.container}>
            <View style={Styles.square}>
                { cmpv.map((u,i) => {
                    return(
                <Text key={i} style={Styles.description}>{u.description}</Text>
                );})}
            </View>
            {/* <View style={Styles.square}><Text style={Styles.description}>Bla Bla Bla</Text></View> */}
            {(role == 'formateur')
            ?<CircularButton onPress={() => {setVisible(true)}} width={80} height={80}/>
            :(role == 'entreprise') ?<CircularButton onPress={() => {setVisible(true)}} width={80} height={80}/>
            :<View />
            }
            <Dialog
                    visible={visible}
                    onTouchOutside={() => {
                    setVisible(false);
                    }} 
                >
                    <DialogContent style={{width:200}}>
                        <TextInput style={{borderWidth:0.5, borderRadius:10, padding:10, marginTop:10, marginBottom:10}} />
                        <TouchableOpacity style={{alignItems: "center",backgroundColor: "#DDDDDD",padding: 10, borderRadius:30}}>
                            <Text>Ajouter</Text>
                        </TouchableOpacity>
                    </DialogContent>
                </Dialog>
        </View>
    );
}

export default Cmpv;