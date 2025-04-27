import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

/**
 * Проверяет, является ли цвет тёмным (для выбора стиля иконок)
 */
const isDarkColor = (color: string): boolean => {
  if (!color || typeof color !== 'string') return false;

  // Удаляем # и конвертируем HEX в RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Формула яркости (0.299*R + 0.587*G + 0.114*B)
  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness < 0.5;
};

/**
 * Меняет цвет панели навигации (Android) и адаптирует интерфейс (iOS)
 */
export const setNavigationBarColor = async (color: string) => {
  if (Platform.OS === 'android') {
    try {
      await NavigationBar.setBackgroundColorAsync(color);
      await NavigationBar.setButtonStyleAsync(
        isDarkColor(color) ? 'light' : 'dark'
      );
    } catch (error) {
      console.error('Ошибка изменения панели навигации:', error);
    }
  }
  // На iOS панель жестов не поддерживается, но можно адаптировать SafeAreaView
};