import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import RegistrationSign from './Registration_sign';
// import {createNativeStackNavigator} from '@react-navigation/native-stack'; // надо бы удалить эту библиотеку

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, error] = useFonts({
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <RegistrationSign/>
  );
};

export default index;