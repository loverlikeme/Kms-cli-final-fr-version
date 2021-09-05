import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CircularButton from '../../../../components/GestionContenu/CircularButton';
import { RadioButton } from 'react-native-paper';
import ValidationButtonBlue from '../../../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';
import Feather from 'react-native-vector-icons/Feather';

export default function CreateQuiz({navigation}) {
    const [checked, setChecked] = React.useState('first');
    const [op, setOp] = React.useState(0);
    const showResponse = () => {
        setOp(1);
    }

    return(
        <View>
            <View style={styles.header}><Text style={{fontFamily:'Atami', fontSize:24, color:"white", marginLeft:60, marginTop:50}}>Nouveau Cours</Text></View>
            <Text style={{fontSize:24, fontFamily:'Cochin', marginLeft:20, marginBottom:15, marginTop:10 }}>Questions :</Text>
            <TextInput style={{borderWidth:1, width:"80%", height:"20%", borderRadius:30, marginLeft:30, marginBottom:20, marginTop:10}} />
            <CircularButton onPress={showResponse} width={50} height={50} />
            <View style={{paddingHorizontal: 32, opacity:op}}>
                <TextInput style={{ marginTop: 7, borderWidth:0.8, width:"70%", borderRadius:30, borderColor:'#0C3A64'}} />
                <View style={{ alignItems:'flex-end', marginTop:-40}}>
                <RadioButton 
                    value="first"
                    status={ checked ==='first'? 'checked' : 'unchecked'}
                    onPress={ () => setChecked('first')}
                    color='#0C3A64'
                    width={200}
                    height={200}
                /> 
                </View>
            </View>
            <View style={{paddingHorizontal: 32, opacity:op}}>
                <TextInput style={{ marginTop: 7, borderWidth:0.8, width:"70%", borderRadius:30, borderColor:'#0C3A64'}} />
                <View style={{ alignItems:'flex-end', marginTop:-40}}>
                <RadioButton 
                    value="second"
                    status={ checked ==='second'? 'checked' : 'unchecked'}
                    onPress={ () => setChecked('second')}
                    color='#0C3A64'
                /> 
                </View>
            </View>
            <View style={{paddingHorizontal: 32, opacity:op}}>
                <TextInput style={{ marginTop: 7, borderWidth:0.8, width:"70%", borderRadius:30, borderColor:'#0C3A64'}} /> 
                <View style={{ alignItems:'flex-end', marginTop:-40}}>
                <RadioButton 
                    value="third"
                    status={ checked ==='third'? 'checked' : 'unchecked'}
                    onPress={ () => setChecked('third')}
                    color='#0C3A64'
                /> 
                </View>
            </View>
            <View style={{paddingHorizontal: 32, opacity:op}}>
                <TextInput style={{ marginTop: 7, borderWidth:0.8, width:"70%", borderRadius:30, borderColor:'#0C3A64'}} />
                <View style={{ alignItems:'flex-end', marginTop:-40}}>
                <RadioButton 
                    value="fourth"
                    status={ checked ==='fourth'? 'checked' : 'unchecked'}
                    onPress={ () => setChecked('fourth')}
                    color='#0C3A64'
                /> 
                </View>
            </View>
            <ValidationButtonBlue onPress={() => navigation.navigate('MCQuiz')} title='Ajouter' />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height:100,
        backgroundColor: '#00437F',
    },
});