import React, {useState} from 'react';
import {TextInput, View, ScrollView, Button, StyleSheet, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

import ValidationButtonBlue from '../../../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';

export default function NouveauCours({navigation}) {
    const [date, setDate] = useState('26-08-2021');
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [datoDebut, setDatoDebut] = useState(new Date(Date.now()));
    const [datoFin, setDatoFin] = useState(new Date(Date.now()));
    const [isPickerShow, setIsPickerShow] = useState(false);

    const showPicker = () => {
        setIsPickerShow(true);
    }
    const onChangeDebut = (event, value) => {
        setDatoDebut(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
          }
    }
    const onChangeFin = (event, value) => {
        setDatoFin(value);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
          }
    }
    const handleTitre = (text) => {
        setTitre(text);
    }
    const handleDesc = (text) => {
        setDescription(text);
    }

    return(
        <ScrollView>
            <View style={styles.header}><Text style={{fontFamily:'Atami', fontSize:24, color:"white", marginLeft:60, marginTop:40}}>Nouveau Cours</Text></View>
            <Text style={styles.normalText}>Titre :</Text>
            <TextInput style = {styles.input1}
                underlineColorAndroid = "transparent"
                // placeholder = "Text"
                placeholderTextColor = "#DCDBDC"
                autoCapitalize = "none"
                onChangeText = {handleTitre}
            />
            <Text style={styles.normalText}>Description :</Text>
            <TextInput style = {styles.input2}
                underlineColorAndroid = "transparent"
                // placeholder = "Text"
                placeholderTextColor = "#DCDBDC"
                autoCapitalize = "none"
                onChangeText = {handleDesc}
            />
            <Text style={[styles.normalText, {marginBottom:-20}]}>Jour :</Text>
            <DatePicker
                style={styles.datePickerStyle}
                date={date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2021"
                maxDate="01-01-2023"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 13,
                    top: 4,
                    height: 40,
                    marginLeft: 60,
                    marginTop: -35
                    },
                    dateInput: {
                    marginLeft: 70,
                    marginTop: -60,
                    paddingLeft:20
                    },
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
             />
            <Text style={styles.normalText}>Heure Debut:</Text> 
            {!isPickerShow && (
            <View style={styles.btnContainer}>
            <Button title="Heure Debut" color="#5062DF" onPress={showPicker} />
            </View>
            )}
            {isPickerShow && (
            <DateTimePicker
                value={datoDebut}
                mode={'time'}
                display={'clock'}
                is24Hour={true}
                onChange={onChangeDebut}
                style={styles.datePicker}
            /> )}
             <Text style={styles.normalText}>Heure Fin:</Text>
             {!isPickerShow && (
            <View style={styles.btnContainer}>
            <Button title="Heure Fin" color="#5062DF" onPress={showPicker} />
            </View>
            )}
            {isPickerShow && (
            <DateTimePicker
                value={datoFin}
                mode={'time'}
                display={'clock'}
                is24Hour={true}
                onChange={onChangeFin}
                style={styles.datePicker}
            /> )}
            <ValidationButtonBlue onPress={() => navigation.navigate('Liaison')} title="Ajouter" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    datePickerStyle: {
        width: 200,
        marginTop: 20,
        marginLeft:20
    },
    normalText: {
        fontFamily: 'Atami',
        fontSize: 20,
        marginLeft: 15,
        marginTop:20
    },
    input1: {
        margin: 15,
        height: 40,
        borderColor: '#DCDBDC',
        borderWidth: 1,
        borderRadius: 30
     },
     input2: {
        margin: 15,
        height: 120,
        borderColor: '#DCDBDC',
        borderWidth: 1,
        borderRadius: 30
     },
     header: {
         height:100,
         backgroundColor: '#00437F'
         
     },
     datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      btnContainer: {
        padding: 20,
        width:"50%",
        alignContent: 'center',
        marginLeft: "40%",
        marginTop: -45
      },
});