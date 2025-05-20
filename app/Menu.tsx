import React, { useEffect } from 'react';
import { menuStyles } from "@/styles/styles";
import {Image, ImageBackground, Pressable, StatusBar, Text, View } from "react-native";
import { setNavigationBarColor } from './utils/navigationBar';
import { useRouter } from 'expo-router';
import { useLanguage } from './utils/LanguageContext';

export default function Menu(){
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
    });

    const router = useRouter();
    const { t } = useLanguage();

    return (
        <View style={menuStyles.menu}>
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={menuStyles.header}>
                <Image style ={menuStyles.tinyLogo} source={require('../assets/images/Main/tiny_logo.png')}/>
                <View style={menuStyles.headerTables}>
                    <View style={ menuStyles.lvlTable}>
                        <Image style={menuStyles.lvlIcon} source={require('../assets/images/Main/lvl_icon.png')}/>
                        <Text style={menuStyles.headerText}>13 LVL</Text>
                    </View>
                    <View style={ menuStyles.coinsTable}>
                        <Text style={menuStyles.headerText}>99999</Text>
                        <Image style={menuStyles.coinIcon} source={require('../assets/images/Main/coin_icon.png')}/>
                    </View>
                </View>
            </View>
            <View style={menuStyles.body}>
                <View style={menuStyles.bodyButtons}>
                    <Pressable
                        onPress={() => router.navigate('/Settings')}
                        style={menuStyles.settingsButton}
                        >
                        {({ pressed }) => (
                            <Image
                                source={require('../assets/images/Main/settings_icon.png')}
                                style={[menuStyles.settingsIcon, { opacity: pressed ? 0.8 : 1 }]}
                                resizeMode="center"
                            />
                        )}
                    </Pressable>
                    <Pressable
                        onPress={() => router.navigate('/Shop')}
                        style={menuStyles.shopButton}
                        >
                        {({ pressed }) => (
                            <Image
                                source={require('../assets/images/Main/shop_icon.png')}
                                style={[menuStyles.shopIcon, { opacity: pressed ? 0.8 : 1 }]}
                                resizeMode="center"
                            />
                        )}
                    </Pressable>
                </View>
                <ImageBackground source={require('../assets/images/Main/body_background.png')}
                    style={menuStyles.bodyBackground}
                    resizeMode='contain'
                >
                    <Image source={require('../assets/images/Main/avatar.png')} style={menuStyles.avatar}/>
                </ImageBackground>
            </View>
            <View style={menuStyles.footer}>
                <View style={menuStyles.footerContainer}>
                    {/* Левая кнопка - Статистика */}
                    <View style={menuStyles.buttonGroup}>
                        <View style={menuStyles.buttonContent}>
                            <Pressable
                                onPress={() => router.navigate('/Statistics')}
                                style={({ pressed }) => [
                                    menuStyles.footerButton,
                                    { opacity: pressed ? 0.8 : 1 }
                                ]}
                            >
                                <View style={menuStyles.statsContainer}>
                                    <Image 
                                        source={require('../assets/images/Main/stats_1.png')} 
                                        style={menuStyles.statsIcon1}
                                    />
                                    <Image 
                                        source={require('../assets/images/Main/stats_2.png')} 
                                        style={menuStyles.statsIcon2}
                                    />
                                    <Image 
                                        source={require('../assets/images/Main/stats_3.png')} 
                                        style={menuStyles.statsIcon3}
                                    />
                                </View>
                            </Pressable>
                            <Text
                                style={menuStyles.footerText}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                minimumFontScale={0.7}
                            >
                                {t('stats')}
                            </Text>
                        </View>
                    </View>

                    {/* Центральная кнопка - Рейтинг */}
                    <View style={menuStyles.buttonGroup}>
                        <View style={menuStyles.buttonContent}>
                            <Pressable
                            onPress={() => router.navigate('/Rating')}
                            style={({ pressed }) => [
                                menuStyles.footerButton,
                                { opacity: pressed ? 0.8 : 1 }
                            ]}
                            >
                                <Image 
                                    source={require('../assets/images/Main/rating_icon.png')} 
                                    style={menuStyles.ratingIcon}
                                />
                            </Pressable>
                            <Text
                                style={menuStyles.footerText}
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                minimumFontScale={0.7}
                            >
                                {t('rating')}
                            </Text>
                        </View>
                    </View>

                    {/* Правая кнопка - Прогресс */}
                    <View style={menuStyles.buttonGroup}>
                        <View style={menuStyles.buttonContent}>
                            <Pressable
                                onPress={() => router.navigate('/Achievements')}
                                style={({ pressed }) => [
                                    menuStyles.footerButton,
                                    { opacity: pressed ? 0.8 : 1 }
                                ]}
                            >
                            <Image 
                                source={require('../assets/images/Main/achievements_icon.png')} 
                                style={menuStyles.achievementsIcon}
                            />
                            </Pressable>
                            <Text
                                style={menuStyles.footerText}
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