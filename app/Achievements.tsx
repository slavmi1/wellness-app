import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, FlatList, Image, Pressable } from 'react-native';
import { Achievement } from './types';
import { useRouter } from 'expo-router';

const achievements: Achievement[] = [
  { id: '1', text: 'Пробежать 500 м без остановок', reward: 30, done: true },
  { id: '2', text: 'Пробежать 1 км', reward: 45, done: false },
  { id: '3', text: 'Заниматься спортивной ходьбой 20 минут', reward: 60, done: true },
  { id: '4', text: 'Совершить 20-минутную пробежку с 3 людьми', reward: 90, done: false },
];

const renderAchievement = ({ item }: {item:Achievement}) => (
  <View style={styles.achievementContainer}>
    {item.done && (
      <View style={styles.trophyContainer}>
        <Image source={require('../assets/images/Achievements/golden_trophy.png')}/>
      </View>
    )}
    <View style={styles.achievementColumn}>
      <View style={styles.activeContainer}>
        {!item.done && (
          <Image 
            source={require('../assets/images/Achievements/active_challenge_icon.png')}
            style={styles.activeIcon}
          />
        )}
        <Text 
          style={styles.text}
          numberOfLines={3}
          ellipsizeMode='tail'
        >{item.text}</Text>
      </View>
      {!item.done && (
        <View style={styles.rewardContainer}>
          <Image 
            source = {require('../assets/images/Achievements/coin_icon.png')}
            style={styles.coinIcon}
          />
          <Text style={[styles.text, { fontSize: 30 }]}>{item.reward}</Text>
        </View>
      )}
    </View>
  </View>
);

const AchievementsScreen = () => {
  const router = useRouter();

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
      </View>
      <View>
        <FlatList
        data={achievements}
        renderItem={renderAchievement}
        style={styles.achievements}
        />
      </View>
    </View>
  );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === 'android' ? 24 : 0
  },
  header: {
    height: 82,
    padding: 25
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
  achievements: {
    height: '100%',
    padding: 29,
    backgroundColor: '#6EDB71',
    borderWidth: 3,
    borderColor: '#54AB57'
  },
  achievementContainer: {
    minHeight: 123,
    marginBottom: 21,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#5FBB62',
    borderRadius: 20,
    overflow: 'hidden',
    // Тень для iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Тень для Android
    elevation: 4
  },
  trophyContainer: {
    width: 89,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#6EDB71',
    justifyContent: 'center',
    alignItems: 'center'
  },
  achievementColumn: {
    flex: 1,
    padding: 12
  },
  activeContainer: {
    flexDirection: 'row',
    flex: 1
  },
  activeIcon: {
    width: 27,
    height: 38,
    marginRight: 11
  },
  text: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: '#535353',
    flexShrink: 1,
    flexWrap: 'wrap',
    flex: 1
  },
  rewardContainer: {
    flexDirection: 'row',
    marginTop: 3
  },
  coinIcon: {
    width: 23,
    height: 35,
    marginRight: 6
  }
})