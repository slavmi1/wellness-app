import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Platform, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLanguage } from './contexts/LanguageContext';

export default function SettingsScreen(){

  const router = useRouter();
  const { t, toggleLanguage, language } = useLanguage();
  const [distanceUnit, setDistanceUnit] = useState<'km' | 'mi'>('km');

  const distanceTexts = {
    ru: distanceUnit === 'km' ? 'км' : 'мили',
    en: distanceUnit
  };

  const toggleDistanceUnit = () => {
    setDistanceUnit(prev => prev === 'km' ? 'mi' : 'km');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#E1E1E1'}/>
      <Pressable
        onPress={() => router.back()}
        style={styles.backButton}
      >
        {({ pressed }) => (
          <Image
            source={require('../assets/images/back_button.png')}
            style={[styles.backIcon, {opacity: pressed ? 0.8 : 1}]}
          />
        )}
      </Pressable>
      <View style={styles.profile}>
        <Image source={require('../assets/images/Settings_images/user_icon.png')} style={styles.profilePhoto}/>
        <Text style={styles.text}>{t('username')}</Text>
        <Pressable 
          onPress={() => router.navigate('/SignUp')}
          style={styles.exit}
        >
          {({ pressed }) => (
            <Image source={require('../assets/images/Settings_images/exit_icon.png')} style={[styles.exitIcon, {opacity: pressed? 0.8 : 1}]}/>
          )}
        </Pressable>
      </View>
      <View style={styles.distance}>
        <Text style={styles.text}>{t('distance')}</Text>
        <TouchableOpacity onPress={toggleDistanceUnit}>
          <Text style={styles.text}>{distanceTexts[language]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.language}>
        <Text style={styles.text}>{t('language')}</Text>
        <TouchableOpacity onPress={toggleLanguage}>
          <Text style={styles.text}>{language === 'ru' ? 'Русский' : 'English'}</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/images/Settings_images/background.png')} style={styles.background}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 24 : 0
  },
  backButton: {
    width: 30,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 30
  },
  backIcon: {
    width: 22,
    height: 32
  },
  profile: {
    width: 352,
    height: 106,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 82,
    borderWidth: 3,
    borderColor: '#54AB57',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profilePhoto: {
    width: 86,
    height: 86,
    marginLeft: 7
  },
  exit: {
    width: 70,
    height: 100,
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: '#F83A3A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  exitIcon: {
    width: 22,
    height: 27
  },
  distance: {
    width: 352,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: '#E3E3E3',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  language: {
    width: 352,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderTopWidth: 0,
    borderColor: '#E3E3E3',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  background: {
    width: 353.67,
    height: 337.67,
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  text: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    color: '#535353'
  }
});