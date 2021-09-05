import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    bonhomme: {
        flexDirection: 'row',
        margin:30,
        marginRight: 50,
        alignSelf: 'flex-end',
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    liste: {
        backgroundColor: '#d1deeb',
        height: 200,
        width: 150,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: -20,
        padding: 20,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50
    },
    choice: {
        flexDirection: 'row',
        backgroundColor: '#e9eff5',
        marginVertical: 10,
        borderRadius: 10
    },
    icon: {
        padding: 5
    },
    txt: {
        padding: 5
    },
    viewsText: {
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
});