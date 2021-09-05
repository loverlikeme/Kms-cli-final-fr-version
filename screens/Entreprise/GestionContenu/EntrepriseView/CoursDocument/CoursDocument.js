import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
import Styles from './Styles';
import CircularButton from '../../../../../components/GestionContenu/CircularButton';

function CoursDocument() {
    return (
        <View>
            <TouchableOpacity style={Styles.button}> 
                <Text style={Styles.buttonText}>Chapitre1-Introduction.pdf</Text>
                <Image  
                    source={require('../../../../../assets/images/doc.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}> 
                <Text style={Styles.buttonText}>Chapitre1-Introduction.pdf</Text>
                <Image  
                    source={require('../../../../../assets/images/doc.png')} 
                />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.button}> 
                <Text style={Styles.buttonText}>Chapitre1-Introduction.pdf</Text>
                <Image  
                    source={require('../../../../../assets/images/doc.png')} 
                />
            </TouchableOpacity>
            <CircularButton onPress={() => true} width={80} height={80} />
        </View>
    );
}

export default CoursDocument