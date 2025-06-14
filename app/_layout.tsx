import { Slot } from 'expo-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CoinsProvider } from './contexts/CoinsContext';
import { AvatarProvider } from './contexts/AvatarContext';

export default function RootLayout() {
  return (
    <CoinsProvider>
      <AvatarProvider>
        <SafeAreaProvider>
          <LanguageProvider>
            <Slot />
          </LanguageProvider>
        </SafeAreaProvider>
      </AvatarProvider>
    </CoinsProvider>
  );
}