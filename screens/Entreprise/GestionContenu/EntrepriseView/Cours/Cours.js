import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'react-native-axios';
import { Card, Title, Paragraph } from 'react-native-paper';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import TextInput from '../../../../../components/authentification/TextInput/TextInput';
import CircularButton from '../../../../../components/GestionContenu/CircularButton';

export default function Cours({ navigation, role }){

    const [visible, setVisible] = useState(false);
    const [num, setNum] = useState(1);
    const [cours, setCours] = useState([]);
    useEffect( () => {}, [cours])
    axios.get("http://10.0.2.2:8000/api/cours/all/1")
    .then((res) => {
        setCours(res.data);
    }).catch((err) => {
        console.log(err);
    })

    return(
        <View>
            <TextInput 
                icon='search'
                placeholder='Search Here'
                autoCapitalize='none'
                keyboardAppearance='dark'
                returnKeyType='next'
                returnKeyLabel='next'
                style={{borderBottomWidth:0.1, borderTopWidth:0.1, borderRightWidth:0.1, borderRadius:10}}
            />
                { cours.map((u,i) => {
                    return(
                 <Card key={i} style={{marginTop:30, width:"80%", marginLeft:"10%", backgroundColor:"#F5EFEF", height:"16%", paddingLeft:"5%", borderRadius:20}}>
                    <Card.Content>
                        <Title><Text style={{fontSize:19}} onPress={()=> setNum(u.id),setVisible(true)}>{u.titre}</Text></Title>
                        <Paragraph style={{fontSize:13, color:"#6E7FAA"}}>{u.jour}</Paragraph>
                    </Card.Content>
                 </Card>
                    );})}
                <Card style={{marginTop:30, width:"80%", marginLeft:"10%", backgroundColor:"#F5EFEF", height:80, paddingLeft:"5%", borderRadius:20}}>
                    <Card.Content>
                        <Title><Text style={{fontSize:19}} onPress={()=> setVisible(true)}>Hors Sujet</Text></Title>
                        <Paragraph style={{fontSize:13, color:"#6E7FAA"}}>No Time (31/08/2021)</Paragraph>
                    </Card.Content>
                 </Card>
                {(role=='formateur' || role=='entreprise')?
                 <CircularButton onPress={() => navigation.navigate('NouveauCours')} width={80} height={80}/>
                :<View />
                }
                 <Dialog
                    visible={visible}
                    onTouchOutside={() => {
                    setVisible(false);
                    }} 
                >
                    <DialogContent>
                        <Text style={{fontSize:30, color:"#3E3F68", fontFamily:"Josefin Sans", fontWeight:"bold", marginTop:10}} onPress={() => navigation.navigate('Lala',{Screen: 'Presentation', id: num, role:role})}>Consulter</Text>
                        <Text style={{color:"#BAC0CB", fontSize:10}}>___________________________________________________________</Text>
                        <Text style={{fontSize:30, color:"#3E3F68", fontFamily:"Josefin Sans", fontWeight:"bold", marginTop:10}} onPress={() => axios.delete("http://10.0.2.2:8000/api/cours/delete/"+num)}>Supprimer</Text>
                    </DialogContent>
                </Dialog>
        </View> 
    )
}