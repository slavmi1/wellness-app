import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClothesScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Тут будет гардероб!</Text>
    </View>
  );
};

export default ClothesScreen;

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