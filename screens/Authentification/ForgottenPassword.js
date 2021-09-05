import React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text } from 'react-native';
import ValidationButtonBlue from '../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';
import ValidationButtonWhite from '../../components/authentification/ValidationButtonWhite/ValidationButtonWhite';
import TextInput from '../../components/authentification/TextInput/TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Formik } from 'formik';
import axios from 'react-native-axios';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ForgottenPassword({navigation}) {

    function resendPassword(userJson) {
        axios
            .post("http://localhost:8000/auth/users/reset_password/", userJson)
            .then((response) => {
                console.log(response);
            });
      }

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/auth_background.png')} 
                resizeMode="cover" 
                style={styles.image}
            >
                {/* LOGO */}
                <Image    
                    // style={styles.logo}
                    style={{
                        position: 'absolute',
                        width: 100, 
                        height: 100,
                        top: '15%',
                        alignSelf: 'center'
                    }}
                    source={require('../../assets/images/logo.png')} 
                />
                <View 
                    // style={styles.square}
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        width: '90%',
                        top: '50%',
                        bottom: '0%',
                        height: '50%',
                        backgroundColor: '#F8F8F8',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}   
                >
                    <Text style={{ color: '#103B64', fontSize: 13, marginBottom: 38, fontFamily: 'Arial', fontWeight: 'bold' }} >
                        Veuillez saisir votre adresse Email
                    </Text>
                    <Formik
                    initialValues={{ 
                        email: '',
                    }}
                    onSubmit={(values) => {
                      resendPassword(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View> 
                     <View style={styles.cont} >
                            <View style={{padding:8}}>
                                <FontAwesome name="envelope-o" color="black" size={16} />
                            </View>
                            <TextInput
                            //    style={styles.input}
                                style={{width:220}}
                                placeholder='email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />     
                        </View>
                    <ValidationButtonBlue title='Confirmer' onPress={() => handleSubmit()} />
                    </View>
                    )}
                </Formik>    
                </View>
            </ImageBackground>
        </View>
    )
}

export default ForgottenPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    signUpContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    textInput: {
        paddingHorizontal: 32,
        marginBottom: 16,
        width: '100%'
    },
    input: {
        padding: 20, 
        backgroundColor: 'white',
        margin: 10
    },cont: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        borderWidth:0.2,
        borderRadius:5
    }
  });