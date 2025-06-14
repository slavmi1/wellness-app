import React from 'react';
import { Image, ImageBackground, Platform, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useRouter } from 'expo-router';
import { useLanguage } from './contexts/LanguageContext';
import { useCoins } from './contexts/CoinsContext';
import { Avatar } from './components/Avatar';

export default function Menu(){
    const router = useRouter();
    const { t } = useLanguage();
    const { coins } = useCoins();

    return (
        <View style={styles.menu}>
            <View style={styles.header}>
                <Image style ={styles.tinyLogo} source={require('../assets/images/Menu/tiny_logo.png')}/>
                <View style={styles.headerTables}>
                    <View style={ styles.lvlTable}>
                        <Image style={styles.lvlIcon} source={require('../assets/images/Menu/lvl_icon.png')}/>
                        <Text style={styles.headerText}>13 LVL</Text>
                    </View>
                    <View style={ styles.coinsTable}>
                        <Text style={styles.headerText}>{coins}</Text>
                        <Image style={styles.coinIcon} source={require('../assets/images/coin_icon.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyButtons}>
                    <Pressable
                        onPress={() => router.navigate('/Settings')}
                        style={styles.settingsButton}
                        >
                        {({ pressed }) => (
                            <Image
                                source={require('../assets/images/Menu/settings_icon.png')}
                                style={[styles.settingsIcon, { opacity: pressed ? 0.8 : 1 }]}
                            />
                        )}
                    </Pressable>
                    <Pressable
                        onPress={() => router.navigate('/Shop')}
                        style={styles.shopButton}
                        >
                        {({ pressed }) => (
                            <Image
                                source={require('../assets/images/Menu/shop_icon.png')}
                                style={[styles.shopIcon, { opacity: pressed ? 0.8 : 1 }]}
                                resizeMode="center"
                            />
                        )}
                    </Pressable>
                </View>
                <ImageBackground source={require('../assets/images/Menu/body_background.png')}
                    style={styles.bodyBackground}
                    resizeMode='contain'
                >
                    <Avatar/>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerContainer}>
                    {/* Левая кнопка - Статистика */}
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContent}>
                            <Pressable
                                onPress={() => router.navigate('/Tracker')}
                                style={({ pressed }) => [
                                    styles.footerButton,
                                    { opacity: pressed ? 0.8 : 1 }
                                ]}
                            >
                                <View style={styles.statsContainer}>
                                    <Image 
                                        source={require('../assets/images/Menu/stats_1.png')} 
                                        style={styles.statsIcon1}
                                    />
                                    <Image 
                                        source={require('../assets/images/Menu/stats_2.png')} 
                                        style={styles.statsIcon2}
                                    />
                                    <Image 
                                        source={require('../assets/images/Menu/stats_3.png')} 
                                        style={styles.statsIcon3}
                                    />
                                </View>
                            </Pressable>
                            <Text
                                style={styles.footerText}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                minimumFontScale={0.7}
                            >
                                {t('stats')}
                            </Text>
                        </View>
                    </View>

                    {/* Центральная кнопка - Рейтинг */}
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContent}>
                            <Pressable
                            onPress={() => router.navigate('/Rating')}
                            style={({ pressed }) => [
                                styles.footerButton,
                                { opacity: pressed ? 0.8 : 1 }
                            ]}
                            >
                                <Image 
                                    source={require('../assets/images/Menu/rating_icon.png')} 
                                    style={styles.ratingIcon}
                                />
                            </Pressable>
                            <Text
                                style={styles.footerText}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                minimumFontScale={0.7}
                            >
                                {t('rating')}
                            </Text>
                        </View>
                    </View>

                    {/* Правая кнопка - Прогресс */}
                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContent}>
                            <Pressable
                                onPress={() => router.navigate('/Achievements')}
                                style={({ pressed }) => [
                                    styles.footerButton,
                                    { opacity: pressed ? 0.8 : 1 }
                                ]}
                            >
                                <Image 
                                    source={require('../assets/images/Menu/achievements_icon.png')} 
                                    style={styles.achievementsIcon}
                                />
                            </Pressable>
                            <Text
                                style={styles.footerText}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                minimumFontScale={0.7}
                            >
                                {t('progress')}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        color: 'fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === 'android' ? 24 : 0
    },
    header: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6EDB71',
        borderBottomWidth: 3,
        borderColor: '#54AB57'
    },
    tinyLogo: {
        width: 68,
        height: 20,
        marginTop: 10,
        marginBottom: 5
    },
    headerTables: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lvlTable: {
        width: 165,
        height: 68,
        borderRadius: 30,
        paddingRight: 5,
        backgroundColor: '#5FBB62',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lvlIcon: {
        width: 54,
        height: 54,
        marginLeft: 5,
    },
    coinsTable: {
        width: 165,
        height: 68,
        borderRadius: 30,
        paddingLeft: 5,
        backgroundColor: '#5FBB62',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coinIcon: {
        width: 33,
        height: 50,
        marginRight: 12 
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Bold',
        fontSize: 30,
        letterSpacing: -1.5,
    },
    body: {
        flex: 4.5,
        backgroundColor: 'white',
        position: 'relative' // для позиционирования аватара
    },
    bodyButtons: {
        flexDirection: 'row',
        padding: 14,
        paddingBottom: 0,
        justifyContent: 'space-between'
    },
    settingsButton: {
        width: 69,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginLeft: 14
    },
    settingsIcon: {
        width: 39,
        height: 39
    },
    shopButton: {
        width: 87,
        height: 69,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#E3E3E3',
        borderRadius: 25,
        marginRight: 14
    },
    shopIcon: {
        width: 54,
        height: 41
    },
    bodyBackground: {
        width: '100%',
        height: 403.33,
        alignItems: 'center',
        position: 'relative'
    },

    // Стили для старого (статичного) аватара
    avatar: {
        width: 245.8,
        height: 440,
        position: 'absolute',
        bottom: -60,
    },
    //

    footer: {
        flex: 1,
        backgroundColor: '#6EDB71',
        borderTopWidth: 3,
        borderColor: '#54AB57',
        paddingTop: 10,
        paddingBottom: 20,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%'
    },
    buttonGroup: {
        flex: 1,
        maxWidth: '33%',
        alignItems: 'center',
    },
    buttonContent: {
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    },
    footerButton: {
        width: 80,
        height: 80,
        borderWidth: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        borderColor: '#5FBB62',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: 45,
        justifyContent: 'center',
    },
    statsIcon1: {
        width: 10,
        height: 25,
        marginRight: 5,
    },
    statsIcon2: {
        width: 10,
        height: 35,
        marginRight: 5,
    },
    statsIcon3: {
        width: 10,
        height: 45,
    },
    ratingIcon: {
        width: 40,
        height: 54,
    },
    achievementsIcon: {
        width: 50,
        height: 40,
    },
    footerText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 5,
        position: 'absolute',
        bottom: 0,
    },
});