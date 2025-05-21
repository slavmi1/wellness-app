import { Slot } from 'expo-router';
import { LanguageProvider } from './utils/LanguageContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LanguageProvider>
        <Slot />
      </LanguageProvider>
    </SafeAreaProvider>
  );
}