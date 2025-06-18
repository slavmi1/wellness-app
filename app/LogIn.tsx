import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ImageBackground, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLanguage } from './contexts/LanguageContext';
import { setNavigationBarColor } from './utils/navigationBar';

export default function RegistrationLog() {
    const { t } = useLanguage();
    
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
    });
        
    const router = useRouter();
    return (
        <ImageBackground 
            source={require('../assets/images/Registration/sign_background.jpg')} 
            style={styles.background}
        >
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={[styles.container, {top: '35%'}]}>
                <Text style={styles.text}>{t('time_for_running')}</Text>
                <Text style={[styles.text, {marginTop: 15, marginBottom: 24}]}>{t('welcome_back')}</Text>
                <TextInput 
                    placeholder={t('name')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={styles.input}
                />
                <TextInput 
                    placeholder={t('password')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={[styles.input, {marginBottom: 5}]}
                    secureTextEntry={true}
                />
                <View style={{width: '100%', paddingLeft: 15, marginBottom: 40}}>
                    <Pressable
                        onPress={() => console.log('Восстановить пароль.')}
                    >
                        {({ pressed }) => (
                            <Text style={[styles.forgotButton, { opacity: pressed ? 0.8 : 1 }]}>{t('forgot_password')}</Text>
                        )}
                    </Pressable>
                </View>
                <Pressable 
                    onPress={() => router.navigate('/Menu')}
                    style={styles.signButton}
                >
                    {({ pressed }) => (
                        <Text style={[styles.text, { opacity: pressed ? 0.8 : 1 }]}>{t('log_in')}</Text>
                    )}
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        marginBottom: Platform.OS === 'android' ? 24 : 0
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
        fontSize: 24
    },
    forgotButton: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#fff',
        alignSelf: 'flex-start'
    }
})