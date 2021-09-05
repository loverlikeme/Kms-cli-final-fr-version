import React from 'react';
import { TextInput as  RNTextInput, View, StyleSheet} from 'react-native';
// import { FontAwesome as Icon } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

export default function TextInput({icon, ...otherProps}) {
    const validationColor = '#223e4b';
    return (
        <View  style={ Styles.container} >
            <View style={Styles.icon}>
                <FontAwesome name={icon} color={validationColor} size={16} />
            </View>
            <View style={Styles.input}>
                 <RNTextInput
                     underlineColorAndroid='transparent'
                     placeholderTextColor='rgba(34, 62, 75, 0.7)'
                     {...otherProps}
                 />
            </View>
        </View>
    )
}