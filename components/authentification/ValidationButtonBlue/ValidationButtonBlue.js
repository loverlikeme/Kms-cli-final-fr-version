import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Styles from './Styles'

/**
 * title of the button
 */

function ValidationButtonBlue(props) {
    return (
        <TouchableOpacity style={Styles.button} onPress={props.onPress}>
            <Text style={Styles.buttonText}>{props.title}</Text>
            <Icon name="rightcircle" size={26} color="white" />
        </TouchableOpacity>
    );
}

export default ValidationButtonBlue
