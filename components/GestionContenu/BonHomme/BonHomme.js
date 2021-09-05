import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Styles from './Styles';

function BonHomme() {
    const [isListVisible, setIsListVisible] = useState(false);
    const [view, setView] = useState('individu');
    return (
        <View style={Styles.container}>
            <View
                style={Styles.bonhomme}
            >
                <Image
                    style= {Styles.image}
                    source={require('../../../assets/images/person.jpg')} 
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
                ?<Text style={Styles.viewsText}>Participant View</Text>
                :(view==='entreprise')
                    ?<Text style={Styles.viewsText}>Entreprise View</Text>
                    :(view==='formateur')
                        ?<Text style={Styles.viewsText}>Formateur View</Text>
                        :<Text style={Styles.viewsText}>Individu View</Text>            
            }
        </View>
    );
}

export default BonHomme