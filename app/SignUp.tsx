import React, { useEffect, useState } from 'react';
import { regStyles } from '@/styles/styles';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Platform, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as SystemUI from 'expo-system-ui';
import { useLanguage } from './utils/LanguageContext';

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
            style={regStyles.background}
        >
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={regStyles.container}>
                <Text style={regStyles.text}>{t('time_for_running')}</Text>
                <Text style={{lineHeight: 16}}></Text>
                <Text style={[regStyles.text, {width: 353, marginTop: 5, marginBottom: 20}]}>{t('sign_and_start')}</Text>
                <TextInput 
                    placeholder={t('name')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={regStyles.input}
                />
                <Pressable onPress={showDatepicker} style={regStyles.birthInput}>
                    <TextInput 
                        placeholder={t('date_of_birth')} 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
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
                    style={regStyles.input}
                    secureTextEntry={true}
                />
                <TextInput 
                    placeholder={t('repeat_password')} 
                    placeholderTextColor={'#E3E3E3'} 
                    style={regStyles.input}
                    secureTextEntry={true}
                />
                <Pressable 
                    onPress={() => router.navigate('/Menu')}
                    style={regStyles.signButton}
                >
                    {({ pressed }) => (
                        <Text style={[regStyles.text, { opacity: pressed ? 0.8 : 1 }]}>{t('sign')}</Text>
                    )}
                </Pressable>
                <Pressable
                   onPress={() => router.navigate('/LogIn')}
                >
                {({ pressed }) => (
                    <Text style={[regStyles.logInText, { opacity: pressed ? 0.8 : 1 }]}>{t('log_in')}</Text>
                )}
                </Pressable>
            </View>
        </ImageBackground>
    );
}

export default RegistrationSign;