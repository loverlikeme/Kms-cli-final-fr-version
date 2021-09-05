import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import axios from 'react-native-axios';
import { useEffect } from 'react/cjs/react.development';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

import Styles from './Styles';

import Homework from '../../../../../components/GestionContenu/Homework';
import CircularButton from '../../../../../components/GestionContenu/CircularButton';

function Homeworks({navigation, route}) {
    const {role} = route.params
    const [homework, setHomework] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect( () => {
    }, [homework])
    axios.get("http://10.0.2.2:8000/api/travail/1")
    .then((res) => {
        setHomework(res.data);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <View style={Styles.container}>
            { homework.map((u,i) => {
                return(
            <Homework title={u.titre} onPress={() => navigation.navigate('Travail')} key={i}/>
    );})}
            {(role=='formateur' || role=='entreprise')?
            <CircularButton width={80} height={80} onPress={() => {setVisible(true)}} />
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

export default Homeworks
