import { StyleSheet } from "react-native";

export const regStyles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        position: 'absolute',
        top: '32.7%',
        width: '85%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center'
    },
    input: {
        height: 50,
        width: '100%',
        maxWidth: '100%',
        marginBottom: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E3E3E3',
        borderRadius: 15,
        fontFamily: 'Ubuntu-Bold',
        fontSize: 22
    },
    signButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 126,
        height: 70,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#5FBB62'
    },
    logInText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#fff'
    }
});

export const logInStyles = StyleSheet.create({
    input: {
        height: 60,
        width: '100%',
        maxWidth: '100%',
        marginBottom: 15,
        paddingVertical: 8,
        paddingHorizontal: 15,
        textAlignVertical: 'center',
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#E3E3E3',
        borderRadius: 15,
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24
    },
    forgotButton: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#fff',
        alignSelf: 'flex-start'
    }
});

export const menuStyles = StyleSheet.create({
    menu: {
        flex: 1,
        color: 'fff'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6EDB71',
        borderBottomWidth: 3,
        borderColor: '#54AB57'
    },
    tinyLogo: {
        marginTop: 10,
        width: 68,
        height: 20
    },
    headerTables: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lvlTable: {
        width: 165,
        height: 68,
        borderRadius: 30,
        paddingRight: 5,
        backgroundColor: '#5FBB62',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lvlIcon: {
        width: 54,
        height: 54,
        marginLeft: 5,
    },
    coinsTable: {
        width: 165,
        height: 68,
        borderRadius: 30,
        paddingLeft: 5,
        backgroundColor: '#5FBB62',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coinIcon: {
        width: 33,
        height: 50,
        marginRight: 12 
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        letterSpacing: -1.5,
    },
    body: {
        flex: 4.5,
        backgroundColor: 'white'
    },
    bodyButtons: {
        flexDirection: 'row',
        padding: 14,
        justifyContent: 'space-between',
    },
    settingsButton: {
        width: 69,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25
    },
    settingsIcon: {
        width: 39,
        height: 39
    },
    bodyButtonsRight: {
        flexDirection: 'row',
    },
    shopButton: {
        width: 87,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginRight: 17
    },
    shopIcon: {
        width: 54,
        height: 41
    },
    clothesButton: {
        width: 87,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginRight: 21
    },
    clothesIcon: {
        width: 52,
        height: 41
    },
    bodyBackground: {
        
    },
    footer: {
        flex: 1,
        backgroundColor: '#6EDB71'
    }
});