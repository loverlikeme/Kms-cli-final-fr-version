import React from 'react';
import { StyleSheet, Image, View, ImageBackground, Text, Button, ScrollView } from 'react-native';
import ValidationButtonBlue from '../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';
import ValidationButtonWhite from '../../components/authentification/ValidationButtonWhite/ValidationButtonWhite';
import TextInput from '../../components/authentification/TextInput/TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Formik } from 'formik';
import axios from 'react-native-axios';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({navigation}) {

    function login(userJson) {
        axios
            .post("http://localhost:8000/auth/jwt/create/", userJson)
            .then((response) => {
                console.log(response);
                setUser(response.data);
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
                    style={{
                        position: 'absolute',
                        width: 100, 
                        height: 100,
                        top: '12%',
                        alignSelf: 'center'
                    }}
                    source={require('../../assets/images/logo.png')} 
                />
                <View 
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        width: '90%',
                        top: '40%',
                        bottom: '0%',
                        height: '60%',
                        backgroundColor: '#F8F8F8',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}   
                >
                <ScrollView style={{flex:1, width:"80%"}} >
                    <Formik
                    initialValues={{ 
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values) => {
                        login(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View style={styles.cont}>
                            <View style={{padding:8}}>
                                <FontAwesome name="envelope-o" color="black" size={16} />
                            </View>
                            <TextInput
                                style={{width:100, }}
                                placeholder='email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.cont} >
                            <View style={{padding:8}}>
                                <FontAwesome name="lock" color="black" size={16} />
                            </View>
                            <TextInput
                                style={{ width:100}}
                                placeholder='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />  
                        </View>        
                        <ValidationButtonBlue 
                            onPress={()=>{
                                handleSubmit();
                                navigation.navigate("LoadingPage");
                            }} 
                            title="Sign In"
                        />
                        <ValidationButtonWhite title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
                    </View>
                    )}
                </Formik>

            <View style={{padding: 20}}/>
            <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
                        <Text style={{ color: '#1AA5E2', fontSize: 12, textAlign: 'right' }} onPress={() => navigation.navigate('ForgottenPassword')}>
                            Mot de Passe Oublié?
                        </Text>
                    </View>
            <View style={{padding: 20}}/>
            </ScrollView>
            </View>
        </ImageBackground>
    </View>
    )
}

export default Login

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
    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
    }
  });
