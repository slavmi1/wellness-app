import React, { useEffect, useState } from 'react';
import { regStyles } from '@/styles/styles';
import { setNavigationBarColor } from './utils/navigationBar';
import { ImageBackground, Platform, Pressable, StatusBar, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegistrationSign = () => {
    useEffect(() => {
            setNavigationBarColor('#E1E1E1');
        });

    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [dateText, setDateText] = useState('');

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(Platform.OS === 'ios'); // для iOS оставляем календарь открытым
        setDate(currentDate);
        
        // Форматируем дату в читаемый вид
        const formattedDate = currentDate.toLocaleDateString('en-US', {
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
                    <Text style={regStyles.text}>TIME FOR RUNNING!</Text>
                    <Text style={{height: 20}}></Text>
                    <Text style={[regStyles.text, {marginBottom: 20}]}>Sign and start your journey today</Text>
                    <TextInput 
                        placeholder='Name' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                    />
                    <Pressable onPress={showDatepicker} style={regStyles.birthInput}>
                        <TextInput 
                            placeholder='Date of birth' 
                            placeholderTextColor={'#E3E3E3'} 
                            style={regStyles.input}
                            value={dateText}
                            editable={false} // делаем поле нередактируемым вручную
                            pointerEvents="none" // отключаем события касания для TextInput
                        />
                    </Pressable>

                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onChangeDate}
                            maximumDate={new Date()} // нельзя выбрать дату в будущем
                        />
                    )}

                    <TextInput 
                        placeholder='Password' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                        secureTextEntry={true}
                    />
                    <TextInput 
                        placeholder='Repeat your password' 
                        placeholderTextColor={'#E3E3E3'} 
                        style={regStyles.input}
                        secureTextEntry={true}
                    />
                    <Pressable 
                        onPress={() => router.navigate('/Menu')}
                        style={regStyles.signButton}
                    >
                        {({ pressed }) => (
                            <Text style={[regStyles.text, { opacity: pressed ? 0.8 : 1 }]}>Sign</Text> // просто переход на главную
                        )}
                    </Pressable>
                    <Pressable
                       onPress={() => router.navigate('/Registration_log')}
                    >
                    {({ pressed }) => (
                        <Text style={[regStyles.logInText, { opacity: pressed ? 0.8 : 1 }]}>Log in</Text>
                    )}
                    </Pressable>
                </View>
            </ImageBackground>
        );
}

export default RegistrationSign;