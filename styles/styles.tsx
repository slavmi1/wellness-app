import { StyleSheet } from "react-native";

export const regStyles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        position: 'absolute',
        top: '32%',
        width: '85%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 28,
        color: '#fff',
        lineHeight: 28,
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
    birthInput: {
        width: '100%'
    },
    signButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 18,
        paddingHorizontal: 26,
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
        width: 68,
        height: 20,
        marginTop: 10,
        marginBottom: 5
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
        backgroundColor: 'white',
        position: 'relative' // для позиционирования аватара
    },
    bodyButtons: {
        flexDirection: 'row',
        padding: 14,
        paddingBottom: 0,
        justifyContent: 'space-between'
    },
    settingsButton: {
        width: 69,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginLeft: 14
    },
    settingsIcon: {
        width: 39,
        height: 39
    },
    shopButton: {
        width: 87,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginRight: 14
    },
    shopIcon: {
        width: 54,
        height: 41
    },
    bodyBackground: {
        width: '100%',
        height: 403.33,
        alignItems: 'center',
        position: 'relative'
    },
    avatar: {
        width: 245.8,
        height: 440,
        position: 'absolute',
        bottom: -60,
    },
    footer: {
        flex: 1,
        backgroundColor: '#6EDB71',
        borderTopWidth: 3,
        borderColor: '#54AB57',
        paddingTop: 10,
        paddingBottom: 15,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
    },
    buttonGroup: {
        flex: 1,
        maxWidth: '33%',
        alignItems: 'center',
    },
    buttonContent: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    },
    footerButton: {
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderColor: '#5FBB62',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 45,
        justifyContent: 'center',
    },
    statsIcon1: {
        width: 10,
        height: 25,
        marginRight: 5,
    },
    statsIcon2: {
        width: 10,
        height: 35,
        marginRight: 5,
    },
    statsIcon3: {
        width: 10,
        height: 45,
    },
    ratingIcon: {
        width: 40,
        height: 54,
    },
    achievementsIcon: {
        width: 50,
        height: 40,
    },
    footerText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 5,
        position: 'absolute',
        bottom: 0,
    },
});

