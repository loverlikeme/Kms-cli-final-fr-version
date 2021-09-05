import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {View, Text, TouchableOpacity} from 'react-native';
import Document from '../../../../../components/GestionContenu/Document';
import Styles from './Styles';

export default function ConsigneTravail() {

    return(
        <View>
            <TouchableOpacity style={Styles.button} onPress={() => true}>
                    <View style={{width: '6%'}}/>
                    <Feather name="link" size={24} color="white"  />
                    <Text style={Styles.buttonText}>Ajouter lien</Text>
            </TouchableOpacity>
            <Document />
        </View>
    )
}