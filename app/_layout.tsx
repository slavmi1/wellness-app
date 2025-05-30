import { Slot } from 'expo-router';
import { LanguageProvider } from './utils/LanguageContext';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <Slot />
    </LanguageProvider>
  );
}