import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import SwitcherScroll from '../../screens/Entreprise/GestionContenu/SwitcherScroll';

import Styles from './Sty';

function Homme({navigation}) {
    const [isListVisible, setIsListVisible] = useState(false);
    const [view, setView] = useState('individu');
    return (
        <View style={Styles.container}>
            <View
                style={Styles.bonhomme}
            >
                <Image
                    style= {Styles.image}
                    source={require('../../assets/images/person.jpg')} 
                />
                <Icon 
                    style={{
                        marginTop: 7, 
                        paddingLeft: 15
                    }} 
                    name={'caretdown'} 
                    color='#00437F' 
                    size={20}
                    onPress={()=>{
                        setIsListVisible(!isListVisible);
                    }}
                />
            </View>
            {isListVisible
                ?<View style={Styles.liste}>
                    <TouchableOpacity 
                        style={Styles.choice}
                        onPress={()=>{
                            setView('entreprise');
                            setIsListVisible(false);
                        }}
                    >
                        <FontAwesome style={Styles.icon}  name={'user-tie'} color='#00437F' size={20} />
                        <Text style={Styles.txt}>Entreprise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Styles.choice}
                        onPress={()=>{
                            setView('formateur');
                            setIsListVisible(false);
                        }}
                    >
                        <FontAwesome style={Styles.icon}  name={'user-graduate'} color='#00437F' size={20} />
                        <Text style={Styles.txt}>Formateur</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Styles.choice}
                        onPress={()=>{
                            setView('participant'); 
                            setIsListVisible(false);
                        }}
                    >
                        <FontAwesome style={Styles.icon}  name={'user'} color='#00437F' size={20} />
                        <Text style={Styles.txt}>Participant</Text>
                    </TouchableOpacity>
                </View>
                : <View />
            }
            {(view==='participant')
                ?<SwitcherScroll navigation={navigation} role="participant" />
                :(view==='entreprise')
                    ?<SwitcherScroll navigation={navigation} role="entreprise" />
                    :(view==='formateur')
                        ?<SwitcherScroll navigation={navigation} role="formateur" />
                        :<Text style={Styles.viewsText}>Individu View: Nothing</Text>            
            }
        </View>
    );
}

export default Homme