import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useLanguage } from './contexts/LanguageContext';
import { Achievement } from './types';

// const achievements: Achievement[] = [
//   { id: '1', text: 'Пробежать 1 км', reward: 30, done: true },
//   { id: '2', text: 'Пробежать суммарно 10 км', reward: 45, done: false },
//   { id: '3', text: 'Пробежать суммарно 21 км', reward: 60, done: false },
//   { id: '4', text: 'Пробежать суммарно 42 км', reward: 90, done: false },

//   { id: '5', text: 'Пробежать более 3 км за тренировку', reward: 60, done: true },
//   { id: '6', text: 'Пробежать более 5 км за тренировку', reward: 90, done: false },
//   { id: '7', text: 'Пробежать более 10 км за тренировку', reward: 90, done: false },

//   { id: '8', text: 'Пробежать минимум 1 км 2 дня подряд', reward: 60, done: true },
//   { id: '9', text: 'Пробежать минимум 1 км 7 дней подряд', reward: 90, done: false },
//   { id: '10', text: 'Пробежать минимум 1 км 21 дней подряд', reward: 90, done: false },

//   { id: '11', text: 'Пробежать минимум 3 км раньше 8:00 утра', reward: 60, done: false },
//   { id: '12', text: 'Пробежать минимум 2 км в субботу и воскресенье подряд', reward: 90, done: false },
//   { id: '13', text: 'Пробежать 3 км после 20:00', reward: 90, done: false },
// ];

// const renderAchievement = ({ item }: {item:Achievement}) => (
//   <View style={styles.achievementContainer}>
//     {item.done && (
//       <View style={styles.trophyContainer}>
//         <Image source={require('../assets/images/Achievements/golden_trophy.png')} style={styles.trophyIcon}/>
//       </View>
//     )}
//     <View style={styles.achievementColumn}>
//       <View style={styles.activeContainer}>
//         {!item.done && (
//           <Image 
//             source={require('../assets/images/Achievements/active_challenge_icon.png')}
//             style={styles.activeIcon}
//           />
//         )}
//         <Text 
//           style={styles.text}
//           numberOfLines={3}
//           ellipsizeMode='tail'
//         >{item.text}</Text>
//       </View>
//       {!item.done && (
//         <View style={styles.rewardContainer}>
//           <Image 
//             source = {require('../assets/images/Achievements/coin_icon.png')}
//             style={styles.coinIcon}
//           />
//           <Text style={[styles.text, { fontSize: 30 }]}>{item.reward}</Text>
//         </View>
//       )}
//     </View>
//   </View>
// );

const AchievementsScreen = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const achievements: Achievement[] = [
    { id: '1', text: t('run_1km'), reward: 30, done: true },
    { id: '2', text: t('run_10km_total'), reward: 45, done: false },
    { id: '3', text: t('run_21km_total'), reward: 60, done: false },
    { id: '4', text: t('run_42km_total'), reward: 90, done: false },
    { id: '5', text: t('run_3km_workout'), reward: 60, done: true },
    { id: '6', text: t('run_5km_workout'), reward: 90, done: false },
    { id: '7', text: t('run_10km_workout'), reward: 90, done: false },
  ];

  const renderAchievement = ({ item }: {item: Achievement}) => (
    <View style={styles.achievementContainer}>
      {item.done && (
        <View style={styles.trophyContainer}>
          <Image 
            source={require('../assets/images/Achievements/golden_trophy.png')} 
            style={styles.trophyIcon}
          />
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
          >
            {item.text}
          </Text>
        </View>
        {!item.done && (
          <View style={styles.rewardContainer}>
            <Image 
              source={require('../assets/images/Achievements/coin_icon.png')}
              style={styles.coinIcon}
            />
            <Text style={[styles.text, { fontSize: 30 }]}>{item.reward}</Text>
          </View>
        )}
      </View>
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
    paddingBottom: 100,
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
  trophyIcon: {
    width: 73,
    height: 59
  },
  achievementColumn: {
    flex: 1,
    padding: 12
  },
  activeContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    flex: 1
  },
  activeIcon: {
    width: 27,
    height: 40,
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