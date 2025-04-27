import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import RegistrationSign from './Registration_sign';
import RegistrationLog from './Registration_log';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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