import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    button: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 30,
        width: '90%',
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: '#1AA5E2',
        shadowOpacity: 0.7,
        shadowOffset: { width: 10, height: 10},
        shadowRadius: 10,
        elevation: 3,
        marginTop: 30
    },
    buttonText: {
        flex:1,
        color: "#1AA5E2",
        fontWeight: 'bold',
        flexDirection:'row',
        paddingLeft: '40%'
    }
});