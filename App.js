import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MCQuiz from "./screens/Entreprise/GestionContenu/EntrepriseView/MCQuiz/MCQuiz";
import Homework from "./components/GestionContenu/Homework";
import Document from "./components/GestionContenu/Document";
import Cmpv from "./screens/Entreprise/GestionContenu/EntrepriseView/Cmpv/Cmpv";
import CoursDocument from "./screens/Entreprise/GestionContenu/EntrepriseView/CoursDocument/CoursDocument";
import CoursPresentation from "./screens/Entreprise/GestionContenu/CoursPresentation";
import Enregistrement from "./screens/Entreprise/GestionContenu/Enregistrement";
import CoursReunion from "./screens/Entreprise/GestionContenu/CoursReunion";
import Evaluation from './screens/Entreprise/GestionContenu/EntrepriseView/Evaluation/Evaluation';
import Cours from './screens/Entreprise/GestionContenu/EntrepriseView/Cours/Cours';
//import Liaison from './screens/Entreprise/GestionContenu/Liaison';
import LiaisonCours from './screens/Entreprise/GestionContenu/LiaisonCours';
import Homeworks from './screens/Entreprise/GestionContenu/EntrepriseView/Homeworks/Homeworks';
import LiaisonTravail  from './screens/Entreprise/GestionContenu/LiaisonTravail';
import FirstPage from './screens/Authentification/FirstPage';
import GettingStarted from './screens/Authentification/GettingStarted';
import Login from './screens/Authentification/Login';
import SignUp from './screens/Authentification/SignUp';
import ForgottenPassword from './screens/Authentification/ForgottenPassword';
import LoadingPage from './screens/Authentification/LoadingPage';
import NouvelleReunion from './screens/Entreprise/GestionContenu/NouvelleReunion';
import ProgramInformation from './screens/Entreprise/GestionContenu/ProgramInformation';
import NouveauCours from './screens/Entreprise/GestionContenu/FormateurView/NouveauCours';
import CircularButton from './components/GestionContenu/CircularButton';
import Participants from './screens/Entreprise/GestionContenu/Participants';
import SwitcherScroll from './screens/Entreprise/GestionContenu/SwitcherScroll';
import CreateQuiz from './screens/Entreprise/GestionContenu/FormateurView/CreateQuiz';
import ConsigneTravail from './screens/Entreprise/GestionContenu/EntrepriseView/ConsigneTravail/ConsigneTravail';
import BonHomme from './components/GestionContenu/BonHomme/BonHomme';
import Homme from './components/GestionContenu/Homme';

const Stack = createStackNavigator();

function App()
{
return (
  // <NavigationContainer>
  //   <Stack.Navigator initialRouteName="FirstPage">
  //     <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }}/>
  //     <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }}/>
  //     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
  //     <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
  //     <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} options={{ headerShown: false }}/>
  //     <Stack.Screen name="LoadingPage" component={LoadingPage} options={{ headerShown: false }}/>

  //     <Stack.Screen name="Liaison" component={Homme} options={{ headerShown: false }}/>
  //     <Stack.Screen name="Lala" component={LiaisonCours} options={{ headerShown: false }}/>
  //     <Stack.Screen name="Travail" component={LiaisonTravail} options={{ headerShown: false }}/>
  //     <Stack.Screen name="Homework" component={Homeworks} options={{ headerShown: false }}/>
  //     <Stack.Screen name="MCQuiz" component={MCQuiz} options={{ headerShown: false }}/>
  //     <Stack.Screen name="createQuiz" component={CreateQuiz} options={{ headerShown: false }}/>
  //     <Stack.Screen name="NouveauCours" component={NouveauCours} options={{ headerShown: false }}/>
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Enregistrement />
);
}

export default App;