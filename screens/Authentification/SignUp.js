import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,Image, ImageBackground, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ValidationButtonBlue from '../../components/authentification/ValidationButtonBlue/ValidationButtonBlue';
import ValidationButtonWhite from '../../components/authentification/ValidationButtonWhite/ValidationButtonWhite';

import { Formik } from 'formik';
import axios from "react-native-axios";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignUp({navigation}) {
    const [user, setUser] = useState(null);

    function createNewUser(userJson) {
        axios
            .post("http://localhost:8000/auth/users/", {
                "email": "rami.kammoun20@gmail.com",
                "name": "rami461",
                "first_name": "Rami",
                "last_name": "Kammoun",
                "password": "rami123456789",
                "re_password": "rami123456789"
            })
            .then((response) => {
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
                // style={styles.logo}
                style={{
                    position: 'absolute',
                    width: 100, 
                    height: 100,
                    top: '9%',
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
                    top: '30%',
                    bottom: '0%',
                    height: '70%',
                    backgroundColor: '#F8F8F8',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}   
            >
              <ScrollView style={styles.signUpContainer} >
              <Formik
                initialValues={{ 
                    email: '',
                    name: '',
                    first_name: '',
                    last_name: '',
                    password: '',
                    re_password: ''
                }}
                onSubmit={(values) => {
                    createNewUser(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="envelope-o" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                    </View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="user" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='name'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                    </View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="user" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='first name'
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            value={values.first_name}
                        />
                    </View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="user" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='last name'
                            onChangeText={handleChange('last_name')}
                            onBlur={handleBlur('last_name')}
                            value={values.last_name}
                        />
                    </View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="lock" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </View>
                    <View style={styles.cont}>
                        <View style={{padding:8}}>
                            <FontAwesome name="lock" color="black" size={16} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder='retype password'
                            onChangeText={handleChange('re_password')}
                            onBlur={handleBlur('re_password')}
                            value={values.re_password}
                        />  
                    </View>          
                    <ValidationButtonBlue 
                        onPress={()=>{
                            handleSubmit();
                           // navigation.navigate("Home");
                        }}
                        title="Submit"
                    />
                </View>
                )}
            </Formik>

                <View style={{height: 20}}></View>
                    <Text style={{ textAlign: 'center', marginTop: 45, marginBottom: 30, fontSize: 12, paddingLeft: '20%', paddingRight:'20%'}}>
                      By creating an account you agree to our <Text style={{color: '#1AA5E2'}}>Terms of Service</Text> and <Text style={{color: '#1AA5E2'}}>Privacy Policy</Text>
                  </Text>
            </ScrollView>

          </View>
        </ImageBackground>
    </View>
    );
}

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
        paddingHorizontal: 30,
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

// navigation.navigate('ForgottenPassword')