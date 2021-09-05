import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyProfile() {

    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}>My Profile</Text>
          </View>
          <Image style={styles.avatarEdit} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={[styles.bodyContent]}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>john.williams@gmail.com</Text>
              <TouchableOpacity style={styles.buttonContainer1}>
                <Text style={styles.buttonText1}>Edit Profile</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer2}>
                <Text style={styles.buttonText2}>Delete</Text> 
              </TouchableOpacity>
            </View>
            <View style={styles.infos}>
                <Text style={styles.localisation}><Icon name="street-view" color={"#323B4E"} size={22}/>&nbsp;&nbsp;&nbsp;&nbsp;Tunisia</Text>
            </View>
            <View>
              <Text style={styles.localisation}><Icon name="phone-square" color={"#323B4E"} size={22}/>&nbsp;&nbsp;&nbsp;&nbsp;(+216) 28 695 426</Text>
            </View>
            <View>
                <Text style={styles.localisation}><Icon name="envelope-o" color={"#323B4E"} size={22}/>&nbsp;&nbsp;&nbsp;&nbsp;JohnDoe@aol.com</Text>
              </View>
          </View>
      </View>
    );
  };

const styles = StyleSheet.create({
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