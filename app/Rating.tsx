import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Тут будет рейтинг!</Text>
    </View>
  );
};

export default RatingScreen;

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