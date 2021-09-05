import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInput from '../../components/authentification/TextInput/TextInput';


export default function EditProfile() {

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Edit Profile</Text>
            </View>
            <Image style={Styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar3.png'}}/>
            <View
                style={{
                    position: 'absolute',
                    top: '30%',
                    left:'55%',
                    backgroundColor: 'white',
                    height: 30,
                    width: 30,
                    alignItems: 'center', 
                    alignContent: 'center',
                    borderRadius: 63,
                    borderColor: '#000',
                    borderWidth: 1

                }}
            >
                <Icon name="edit" size={25} color="#5663FF" />
            </View>
            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }} >
                <TextInput
                icon='user'
                placeholder='New Username'
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardAppearance='dark'
                returnKEyType='next'
                returnKEyLabel='next'
                />
            </View>  
            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }} >
                <TextInput
                    icon='envelope-o'
                    placeholder='New Email'
                    autoCapitalize='none'
                    // autoCompleteType='email'
                    keyboardAppearance='dark'
                    returnKEyType='next'
                    returnKEyLabel='next'
                />
            </View>
            <TouchableOpacity style={Styles.updateBtn}>
                <Text style={Styles.buttonText1}>Edit Profile</Text>  
            </TouchableOpacity>  
        </View>
    );
  };

  
const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F8F8F8'
    },
    header:{
        backgroundColor: '#F8F8F8',
        height:'35%',
        marginBottom: 10
    },
    headerText:{
        fontSize:29,
        color:"#222455",
        fontWeight:'600',
        textAlign: "center",
        marginTop: 30,
        fontFamily: "Josefin Sans"
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop: 100
    },
    body:{
        marginTop: '10%',
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:'5%',
    },
    name:{
        fontSize:20,
        color: "#3E3F68",
        fontWeight: "600",
        fontFamily: "Josefin Sans",
        marginBottom: "10%",
        marginBottom: '4%'
    },
    info:{
        fontSize:18,
        color: "#6E7FAA",
        marginTop:'4%',
        fontFamily: "Josefin Sans",
        marginBottom: '3%',
    },
    buttonContainer1: {
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        width:120,
        borderRadius:10,
        backgroundColor: "#5663FF",
        marginRight: "45%"
    },
    buttonContainer2: {
        marginTop:-45,
        height:45,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20,
        width:120,
        borderRadius:10,
        backgroundColor: "white",
        marginLeft: "45%",
        borderColor: "#8A98BA",
        borderWidth: 3,
    },
    buttonText1: {
        color: "white",
        fontSize: 18
    },
    buttonText2: {
        color: "#8A98BA",
        fontSize: 18
    },
    infos: {
        paddingTop: '30%'
    },
    localisation: {
        color:"#323B4E", 
        fontSize:18, 
        marginLeft:'10%', 
        marginTop: '5%'
    },
    avatarEdit: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop: 100
    },
    updateBtn: {
        marginTop: '20%',
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        width:'85%',
        borderRadius:10,
        backgroundColor: "#5663FF",
        alignSelf: 'center'
    }
});