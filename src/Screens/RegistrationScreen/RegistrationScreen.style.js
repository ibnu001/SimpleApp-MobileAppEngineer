import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const registrationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    titleLarge: {
        fontSize: 35,
        fontFamily: 'serif',
        color: Colors.jet,
        marginTop: 24,
    },
    titleSmall: {
        fontSize: 16,
        fontFamily: 'serif',
        color: Colors.sonicSilver,
        marginTop: 4,
        marginBottom: 25
    },
    input: {
        marginTop: 16,
        backgroundColor: 'white',
    },
    btnSignup: {
        marginTop: 40,
        paddingVertical: 8,
        borderRadius: 8,
    },
    labelSignup: {
        fontSize: 17,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    login: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        position: 'absolute',
        top: Dimensions.get('window').height - 110,
        width: Dimensions.get('window').width,
    },
    txtLogin: {
        fontSize: 16,
        color: Colors.sonicSilver
    },
    labelLogin: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default registrationStyles