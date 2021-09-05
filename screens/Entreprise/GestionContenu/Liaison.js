import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgramInformation from './ProgramInformation';
import Cmpv from './Cmpv';
import Evaluation from './Evaluation';
import Cours from './Cours';

const Tab = createMaterialTopTabNavigator();

export default function Liaison({navigation}) {

    return (
        // <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Information" component={ProgramInformation} />
                <Tab.Screen name="Cmpv" component={Cmpv} />
                <Tab.Screen name="Evaluation" component={Evaluation} />
                <Tab.Screen name="Cours" component={Cours} />
                <Tab.Screen name="Participants" component={Cours} />
            </Tab.Navigator>
       //   </NavigationContainer>
  );
}