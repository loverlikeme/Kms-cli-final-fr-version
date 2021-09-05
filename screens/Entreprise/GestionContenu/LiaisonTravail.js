import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Document from '../../../components/GestionContenu/Document';


const Tab = createMaterialTopTabNavigator();

export default function LiaisonCours({navigation}) {

    return (
          <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Consignes" component={Document} />
                <Tab.Screen name="Remises" component={Document} />
            </Tab.Navigator>
          </NavigationContainer>
  );
}