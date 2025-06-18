import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { FlatList, Image, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from './contexts/LanguageContext';
import { Person } from './types';

const RatingScreen = () => {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const { t } = useLanguage();

  const leaderbord: Person[] = [
    { id: '4', name: 'CommGuy', lvl: 50, picture: require('../assets/images/Rating/user_icon_3.png')},
    { id: '2', name: 'alexstampl', lvl: 45, picture: require('../assets/images/Rating/user_icon_5.png')},
    { id: '3', name: 'krrrr_17', lvl: 20, picture: require('../assets/images/Rating/user_icon_1.png')},
    { id: '5', name: 'ANDYSITUS', lvl: 12, picture: require('../assets/images/Rating/user_icon_2.png')},
    { id: '1', name: 'slavmi1', lvl: 3, picture: require('../assets/images/Rating/user_icon_4.png')},
  ];

  const handleFindMe = () => {
    const lastIndex = leaderbord.length - 1;
    const lastItem = leaderbord[lastIndex];
    
    // Прокрутка к последнему элементу
    flatListRef.current?.scrollToIndex({ index: lastIndex, animated: true });
    
    // Подсветка последнего элемента
    setHighlightedId(lastItem.id);
    
    // Убираем подсветку через 3 секунды
    setTimeout(() => setHighlightedId(null), 1000);
  };

  const renderPerson = ({ item, index }: {item: Person; index: number}) => (
    <View style={[
      styles.personContainer,
      highlightedId === item.id && styles.highlightedPerson
    ]}>
      <Image source={item.picture} style={styles.personPicture}/>
      <View>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.lvlContainer}>
          <Image source={require('../assets/images/Rating/lvl_icon.png')} style={styles.lvlIcon}/>
          <Text style={styles.lvlText}>{item.lvl} lvl</Text>
        </View>
      </View>
        { index < 3 && (
          <View style={styles.trophyContainer}>
            <Image 
              source={
                index === 0
                ? require('../assets/images/Rating/golden_trophy.png')
                : index === 1
                ? require('../assets/images/Rating/silver_trophy.png')
                : require('../assets/images/Rating/bronze_trophy.png')
              }
              style={styles.trophy}
            />
         </View>
        )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
          <Pressable
            onPress={handleFindMe}
            style={styles.findMe}
          >
            {({ pressed }) => (
              <Text
                style={[styles.findMeText, {opacity: pressed ? 0.8 : 1}]}
              >
                {t('findme')}
              </Text>
            )}
          </Pressable>
      </View>
      <View style={styles.leaderbordContainer}>
        <FlatList
          ref={flatListRef}
          data={leaderbord}
          renderItem={renderPerson}
          style={styles.leaderbord}
          keyExtractor={(item) => item.id}
          onScrollToIndexFailed={() => {
            // В случае ошибки прокрутки (например, если список еще не отрендерен)
            setTimeout(() => {
              flatListRef.current?.scrollToIndex({ index: leaderbord.length - 1, animated: true });
            }, 100);
          }}
        />
      </View>
    </View>
  );
};

export default RatingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 24 : 0
  },
  header: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButton: {
    width: 30,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIcon: {
    width: 22,
    height: 32
  },
  findMe: {
    height: 66,
    paddingHorizontal: 10,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#E3E3E3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  findMeText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
    color: '#535353'
  },
  leaderbordContainer: {
    flex: 1
  },
  leaderbord: {
    paddingVertical: 26,
    paddingHorizontal: 20,
    backgroundColor: '#6EDB71',
    borderWidth: 3,
    borderColor: '#54AB57',
  },
  personContainer: {
    width: '100%',
    height: 123,
    marginBottom: 28,
    paddingLeft: 13,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#54AB57',
    borderRadius: 20,
    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Тень для Android
    elevation: 4
  },
  highlightedPerson: {
    borderColor: '#FF9F39', // Оранжевый цвет для подсветки
  },
  personPicture: {
    width: 83,
    height: 83,
    marginRight: 15
  },
  nameText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 22,
    color: '#535353',
    marginBottom: 11,
    textAlign: 'center'
  },
  lvlContainer: {
    flexDirection: 'row'
  },
  lvlIcon: {
    width: 29,
    height: 29,
    marginRight: 3
  },
  lvlText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: '#999999',
    textAlign: 'center'
  },
  trophyContainer: {
    width: 85,
    height: '100.1%', // для видео, были проблемы
    marginLeft: 'auto',
    backgroundColor: '#6EDB71',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trophy: {
    width: 73,
    height: 59
  }
});