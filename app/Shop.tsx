import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShopScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Тут будет магазин!</Text>
    </View>
  );
};

export default ShopScreen;

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