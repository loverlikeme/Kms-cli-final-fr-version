import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Enregistrement from './Enregistrement';
import NouvelleReunion from './NouvelleReunion';

const Tab = createMaterialTopTabNavigator();

export default function CoursReunion() {

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="NouvelleReunion" component={NouvelleReunion} />
                <Tab.Screen name="Enregistrement" component={Enregistrement} />
            </Tab.Navigator>
        </NavigationContainer>
  );
}