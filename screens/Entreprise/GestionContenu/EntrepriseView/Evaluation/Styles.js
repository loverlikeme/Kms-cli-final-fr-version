import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
      },
      title: {
          color: '#13577F',
          fontWeight: 'bold',
          fontSize: 28
      },
      btn: {
          height: '40%',
          alignContent: 'center',
          justifyContent: 'center',
          margin: '5%',
          alignItems: 'center',
          width: '50%',
          backgroundColor: 'white',
          borderRadius: 20,
          shadowColor: '#1AA5E2',
          shadowOpacity: 0.7,
          shadowOffset: { width: 10, height: 10},
          shadowRadius: 10,
          elevation: 3,
      },
});