import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    button: {
        backgroundColor: "#1AA5E2",
        padding: 10,
        borderRadius: 30,
        width: '50%',
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
        color: "white",
        fontWeight: 'bold',
        flexDirection:'row',
        paddingLeft: '20%'
    },
});