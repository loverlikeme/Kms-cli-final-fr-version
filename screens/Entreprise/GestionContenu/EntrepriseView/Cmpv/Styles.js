import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
         //flex: 1,
         backgroundColor: '#F8F8F8',
       },
       square: {
           backgroundColor: 'white',
           width: '90%',
           alignSelf: 'center',
           //marginTop: -100,
           paddingHorizontal: '5%',
           paddingVertical: '10%',
           borderRadius: 20,
           shadowColor: '#1AA5E2',
           shadowOpacity: 0.7,
           shadowOffset: { width: 10, height: 10},
           shadowRadius: 10,
           elevation: 3,
           height: '60%',
       },
       description: {
           fontSize: 30,
           fontFamily: 'Josefin Sans',
           color: '#8A98BA',
       }
});