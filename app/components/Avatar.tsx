import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useAvatar } from '../contexts/AvatarContext';

const { height: screenHeight } = Dimensions.get('window')

export const Avatar = () => {
  const { outfit } = useAvatar();

  return (
    <View style={styles.container}>
      {/* Базовое изображение аватара (обязательный слой) */}
      <Image 
        source={require('../../assets/images/Clothes/avatar-empty.png')} 
        style={styles.baseImage} 
      />

      {/* Слои одежды (рендерятся поверх базового изображения) */}
      {outfit.handband && (
        <Image source={outfit.handband.image} style={[styles.clothingLayer, styles.handband]}/>
      )}

      {outfit.hairstyle && (
        <Image source={outfit.hairstyle.image} style={[styles.clothingLayer, styles.hairstyle]} />
      )}
      
      {outfit.face && (
        <Image source={outfit.face.image} style={[styles.clothingLayer, styles.face]} />
      )}
      
      {outfit.accessory && (
        <Image source={outfit.accessory.image} style={[styles.clothingLayer, styles.accessory]} />
      )}
      
      {outfit.faceDetails && (
        <Image source={outfit.faceDetails.image} style={[styles.clothingLayer, styles.faceDetails]} />
      )}
      
      {outfit.shirt && (
        <Image source={outfit.shirt.image} style={[styles.clothingLayer, styles.shirt]} />
      )}

      {outfit.shorts && (
        <Image source={outfit.shorts.image} style={[styles.clothingLayer, styles.shorts]} />
      )}

      {outfit.lowShoes && (
        <Image source={outfit.lowShoes.image} style={[styles.clothingLayer, styles.lowShoes]} />
      )}
      {outfit.highShoes && (
        <Image source={outfit.highShoes.image} style={[styles.clothingLayer, styles.highShoes]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 221, // Фиксированные размеры или можно сделать динамическими
    height: 397,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0, // Самый нижний слой
  },
  clothingLayer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1, // Все предметы одежды выше базового слоя
    resizeMode: 'contain', // Чтобы изображения не искажались
  },
  // Повязки
  handband: {
    zIndex: 5,
    width: 145,
    top: -135,
    left: 39
  },
  // Прически
  hairstyle: {
    zIndex: 4,
    width: 190,
    top: -117,
    left: 9
  },
  // Лица
  face: {
    zIndex: 3,
    width: 120,
    top: -90,
    left: 58
  },
  // Аксессуары (очки)
  accessory: {
    zIndex: 5,
    width: 130,
    top: -90.5,
    left: 55
  },
  // Детали лица
  faceDetails: {
    zIndex: 3,
    width: 85,
    top: -70,
    left: 76
  },
  // Футболки
  shirt: {
    zIndex: 2,
    width: 98,
    top: 4.5
  },
  // Шорты
  shorts: {
    width: 86,
    top: 55,
    left: 68.5
  },
  // Обувь
  lowShoes: {
    zIndex: 2,
    width: 69,
    top: screenHeight - 675,
    left: 75
  },
  highShoes: {
    zIndex: 2,
    width: 70.2,
    top: screenHeight - 680,
    left: 74
  }
});