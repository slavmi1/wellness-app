import React, { useEffect, useState } from 'react';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SystemUI from 'expo-system-ui';
import { useLanguage } from './contexts/LanguageContext';

SystemUI.setBackgroundColorAsync('#E1E1E1');

const RegistrationSign = () => {
    const { t, language } = useLanguage();
    
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
    });

    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateText, setDateText] = useState('');

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios');
        setDate(currentDate);
        
        // Форматируем дату в читаемый вид с учетом текущего языка
        const formattedDate = currentDate.toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        setDateText(formattedDate);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    return (
        <ImageBackground 
            source={require('../assets/images/Registration/sign_background.jpg')} 
            style={styles.background}
        >
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={styles.container}>
                <Text style={styles.text}>{t('time_for_running')}</Text>
                <Text style={{lineHeight: 16}}></Text>
                <Text style={[styles.text, {width: 353, marginTop: 5, marginBottom: 20}]}>{t('sign_and_start')}</Text>
                <TextInput 
                    placeholder={t('name')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={styles.input}
                />
                <Pressable onPress={showDatepicker} style={styles.birthInput}>
                    <TextInput 
                        placeholder={t('date_of_birth')} 
                        placeholderTextColor={'#E3E3E3'} 
                        style={styles.input}
                        value={dateText}
                        editable={false}
                        pointerEvents="none"
                    />
                </Pressable>

                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChangeDate}
                        maximumDate={new Date()}
                    />
                )}

                <TextInput 
                    placeholder={t('password')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TextInput 
                    placeholder={t('repeat_password')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Pressable 
                    onPress={() => router.navigate('/Menu')}
                    style={styles.signButton}
                >
                    {({ pressed }) => (
                        <Text style={[styles.text, { opacity: pressed ? 0.8 : 1 }]}>{t('sign')}</Text>
                    )}
                </Pressable>
                <Pressable
                   onPress={() => router.navigate('/LogIn')}
                >
                {({ pressed }) => (
                    <Text style={[styles.logInText, { opacity: pressed ? 0.8 : 1 }]}>{t('log_in')}</Text>
                )}
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
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
})

export default RegistrationSign;