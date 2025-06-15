import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, FlatList, Image } from 'react-native';
import { Achievement } from './types';

const achievements: Achievement[] = [
  { id: '1', text: 'Пробежать 500 м без остановок', reward: 30, done: false },
  { id: '2', text: 'Пробежать 1 км', reward: 45, done: false },
  { id: '3', text: 'Заниматься спортивной ходьбой 20 минут', reward: 60, done: false },
  { id: '4', text: 'Совершить 20-минутную пробежку с 3 людьми', reward: 90, done: false },
];

const renderAchievement = ({ item }: {item:Achievement}) => (
  <View style={styles.achievementContainer}>
    <View style={styles.trophyContainer}>
      <Image source={require('../assets/images/Achievements/golden_trophy.png')}/>
    </View>
    <Image source={require('../assets/images/Achievements/active_challenge_icon.png')}/>
    <Text>{item.text}</Text>
    <View style={styles.rewardContainer}>
      <Image 
        source = {require('../assets/images/Achievements/coin_icon.png')}
        style={styles.coinIcon}
      />
      <Text>{item.reward}</Text>
    </View>
  </View>
);

const AchievementsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

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
  achievements: {

  },
  achievementContainer: {

  },
  trophyContainer: {

  },
  rewardContainer: {

  },
  coinIcon: {

  }
})