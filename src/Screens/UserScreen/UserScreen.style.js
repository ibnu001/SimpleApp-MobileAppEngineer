import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const userStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    titleLarge: {
        fontSize: 35,
        fontFamily: 'serif',
        color: Colors.jet,
        marginTop: 24,
        marginBottom: 24,
    },
    input: {
        marginTop: 16,
        backgroundColor: 'white',
    },
    inputDate: {
        flex: 3,
        marginTop: 16,
        marginRight: 16,
        backgroundColor: 'white',
    },
    btnSubmission: {
        marginTop: 40,
        paddingVertical: 8,
        borderRadius: 8,
    },
    labelSubmission: {
        fontSize: 17,
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        paddingTop: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    viewDateContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    btnDate: {
        flex: 1,
        paddingVertical: 6,
        borderRadius: 8,
    },
    btnPickDateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
        width: Dimensions.get('window').width - 150
    },
    pickDateBtnCancel: {
        flex: 1,
        borderRadius: 8,
        marginRight: 8
    },
    pickDateBtnOk: {
        flex: 1,
        borderRadius: 8,
        marginLeft: 8,
    },
})

export default userStyles
