import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AchievementsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Тут будут достижения!</Text>
    </View>
  );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 40
    }
})