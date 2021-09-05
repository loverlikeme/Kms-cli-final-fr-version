import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Part from './Part';
import ProgramInformation from './ProgramInformation';
import Cmpv from './EntrepriseView/Cmpv/Cmpv';
import Evaluation from './EntrepriseView/Evaluation/Evaluation';
import Cours from './EntrepriseView/Cours/Cours';
 
function SwitcherScroll({navigation, role}) {
    const [index, setIndex] = useState("1");

    return (
        <View>
            <ScrollView horizontal
                style={{
                    flexDirection:'row',
                    flexWrap:'wrap'
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: (index===1)?"#328EE0":'white',
                        borderRadius: 5,
                        marginLeft: 10,
                        marginRight:5,
                        marginVertical: 10,
                        borderColor: '#328EE0',
                        borderWidth: 0.3,
                    }}
                    onPress={()=>setIndex(1)}
                >
                    <Text
                        style={{
                            color: (index===1)?'white':"#328EE0",
                            padding: 10,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            paddingHorizontal: 20
                        }}
                    >Information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: (index===2)?"#328EE0":'white',
                        borderRadius: 5,
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderColor: '#328EE0',
                        borderWidth: 0.3,                 
                    }}
                    onPress={()=>setIndex(2)}
                >
                    <Text
                        style={{
                            color: (index===2)?'white':"#328EE0",
                            padding: 10,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            paddingHorizontal: 40
                        }}
                    >CMPV</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: (index===3)?"#328EE0":'white',
                        borderRadius: 5,
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderColor: '#328EE0',
                        borderWidth: 0.3,                   
                    }}
                    onPress={()=>setIndex(3)}
                >
                    <Text
                        style={{
                            color: (index===3)?'white':"#328EE0",
                            padding: 10,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            paddingHorizontal: 25
                        }}
                    >Evaluation</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        backgroundColor: (index===4)?"#328EE0":'white',
                        borderRadius: 5,
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderColor: '#328EE0',
                        borderWidth: 0.3,                   
                    }}
                    onPress={()=>setIndex(4)}
                >
                    <Text
                        style={{
                            color: (index===4)?'white':"#328EE0",
                            padding: 10,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            paddingHorizontal: 50
                        }}
                    >Cours</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{
                        backgroundColor: (index===5)?"#328EE0":'white',
                        borderRadius: 5,
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderColor: '#328EE0',
                        borderWidth: 0.3,                     
                    }}
                    onPress={()=>setIndex(5)}
                >
                    <Text
                        style={{
                            color: (index===5)?'white':"#328EE0",
                            padding: 10,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 16,
                            paddingHorizontal: 20
                        }}
                    >Participants</Text>
                </TouchableOpacity>
            </ScrollView>
            {
                (index===1)
                    ?<ProgramInformation role={role}/>
                    :(index===2)
                        ?<Cmpv role={role} />
                        :(index===3)
                            ?<Evaluation navigation={navigation} role={role}/>
                            :(index===4)
                                ?<Cours navigation={navigation} role={role} />
                                :<Part />
            }
        </View>
    )
}

export default SwitcherScroll

const styles = StyleSheet.create({
    container: {
    },
    txt: {
        fontSize: 50,
        alignSelf: 'center',
        margin: 100
    }
  });