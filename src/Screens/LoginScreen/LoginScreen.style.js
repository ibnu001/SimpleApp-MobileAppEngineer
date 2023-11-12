import { Dimensions, StyleSheet } from "react-native"
import Colors from "../../utils/Colors"

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingHorizontal: 16
    },
    imageContainer: {
        // flex: 1,
        alignItems: 'center'
    },
    image: {
        height: 250,
        aspectRatio: 4 / 3,
    },
    titleLarge: {
        fontSize: 45,
        fontFamily: 'serif',
        color: Colors.jet,
    },
    titleMedium: {
        fontSize: 24,
        fontFamily: 'serif',
        color: Colors.sonicSilver,
        marginBottom: 16
    },
    input: {
        marginTop: 16,
        backgroundColor: 'white',
    },
    btnForgotPassword: {
        borderRadius: 8
    },
    labelForgotPassword: {
        textDecorationLine: 'underline'
    },
    btnLogin: {
        marginTop: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    labelLogin: {
        fontSize: 17,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    signup: {
        // borderWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        position: 'absolute',
        height: 40,
        left: 0,
        top: Dimensions.get('window').height - 30,
        width: Dimensions.get('window').width,
    },
    txtSignup: {
        fontSize: 16,
        color: Colors.sonicSilver
    },
    labelSignup: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default loginStyles