import React from 'react';
import {View} from 'react-native';
import Participants from './Participants';

export default function Part() {
    return(
        <View>
            <Participants 
                name= "Rami Kammoun"
                role= "Participant"
                image= {require('../../../assets/images/person_2.png')}
            />
            <Participants 
                name= "Fatma Guidara"
                role= "Participant"
                image= {require('../../../assets/images/person.jpg')}
            />
        </View>
    );
}
