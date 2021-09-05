import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CircularButton(props) {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.roundButton1, {width:props.width,height:props.height}]} > 
         <Text style={{fontSize: 18, color:"white", }}>+</Text> 
      </TouchableOpacity>
  );
}

/// Just some styles
const styles = StyleSheet.create({
  roundButton1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#00437F',
    marginLeft: 300,
    marginBottom: 30,
    marginTop:20
  },
});