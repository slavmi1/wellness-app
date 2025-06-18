import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import RegistrationSign from './SignUp';
import { LanguageProvider } from './contexts/LanguageContext';

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
    <LanguageProvider>
        <RegistrationSign/>
    </LanguageProvider>
  );
};

export default index;