import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CoursPresentation from './CoursPresentation';
import CoursDocument from './EntrepriseView/CoursDocument/CoursDocument';
import CoursReunion from './CoursReunion';

const Tab = createMaterialTopTabNavigator();

export default function LiaisonCours({navigation, route}) {

    return (
        // <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Presentation" component={CoursPresentation} />
                <Tab.Screen name="Document" component={CoursDocument} />
                <Tab.Screen name="Reunions" component={CoursReunion} />
            </Tab.Navigator>
        // </NavigationContainer>
  );
}