import React, { useEffect } from 'react';
import { menuStyles } from "@/styles/styles";
import {Image, ImageBackground, Pressable, StatusBar, Text, View } from "react-native";
import { setNavigationBarColor } from './utils/navigationBar';
import { useRouter } from 'expo-router';

export default function Menu(){
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
      });

    const router = useRouter();
    return (
        <View style={menuStyles.menu}>
            <StatusBar backgroundColor={'#E1E1E1'}/>
            <View style={menuStyles.header}>
                <Image style ={menuStyles.tinyLogo} source={require('../assets/images/Main/tiny_logo.png')}/>
                <View style={menuStyles.headerTables}>
                    <View style={ menuStyles.lvlTable}>
                        <Image style={menuStyles.lvlIcon} source={require('../assets/images/Main/lvl_icon.png')}/>
                        <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7} style={menuStyles.headerText}>
                            13 LVL
                        </Text>
                    </View>
                    <View style={ menuStyles.coinsTable}>
                        <Text numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7} style={menuStyles.headerText}>
                            99999
                        </Text>
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
                        {({ pressed }) => (  // pressed — состояние нажатия (true/false)
                            <Image
                                source={require('../assets/images/Main/settings_icon.png')}
                                style={[menuStyles.settingsIcon, { opacity: pressed ? 0.8 : 1 }]}
                                resizeMode="center"  // Режим масштабирования изображения
                            >
                            </Image>
                        )}
                    </Pressable>
                    <View style={menuStyles.bodyButtonsRight}>
                        <Pressable
                            onPress={() => router.navigate('/Shop')}
                            style={menuStyles.shopButton}
                            >
                            {({ pressed }) => (
                                <Image
                                    source={require('../assets/images/Main/shop_icon.png')}
                                    style={[menuStyles.shopIcon, { opacity: pressed ? 0.8 : 1 }]}
                                    resizeMode="center"
                                >
                                </Image>
                            )}
                        </Pressable>
                        <Pressable
                             onPress={() => router.navigate('/Clothes')}
                            style={menuStyles.clothesButton}
                            >
                            {({ pressed }) => (
                                <Image
                                    source={require('../assets/images/Main/clothes_icon.png')}
                                    style={[menuStyles.clothesIcon, { opacity: pressed ? 0.8 : 1 }]}
                                    resizeMode="center"
                                >
                                </Image>
                            )}
                        </Pressable>
                    </View>
                </View>
                <ImageBackground source={require('../assets/images/Main/body_background.png')}
                    style={menuStyles.bodyBackground}
                    resizeMode='contain'
                >
                    <Image source={require('../assets/images/Main/avatar.png')} style={menuStyles.avatar}/>
                </ImageBackground>
            </View>
            <View style={menuStyles.footer}>
                <View style={menuStyles.footerButtons}>
                    <Pressable
                        onPress={() => router.navigate('/Statistics')}
                    >
                        {({ pressed }) => (
                            <View>
                            <View style={[
                                menuStyles.footerButton, 
                                { opacity: pressed ? 0.8 : 1 }
                            ]}>
                                <View style={menuStyles.statsContainer}>
                                <Image 
                                    source={require('../assets/images/Main/stats_1.png')} 
                                    style={[menuStyles.statsIcon1, {marginRight: 5}]}
                                />
                                <Image 
                                    source={require('../assets/images/Main/stats_2.png')} 
                                    style={[menuStyles.statsIcon2, {marginRight: 5}]}
                                />
                                <Image 
                                    source={require('../assets/images/Main/stats_3.png')} 
                                    style={menuStyles.statsIcon3}
                                />
                                </View>
                            </View>
                            <Text style={[
                                menuStyles.footerText, 
                                { opacity: pressed ? 0.8 : 1 }
                            ]}>
                                Stats
                            </Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable
                        onPress={() => router.navigate('/Rating')}
                    >
                        {({ pressed }) => (
                            <View>
                            <View style={[
                                menuStyles.footerButton, 
                                { opacity: pressed ? 0.8 : 1 }
                            ]}>
                                <Image 
                                source={require('../assets/images/Main/rating_icon.png')} 
                                style={menuStyles.ratingIcon}
                                />
                            </View>
                            <Text style={[
                                menuStyles.footerText, 
                                { opacity: pressed ? 0.8 : 1 }
                            ]}>
                                Rating
                            </Text>
                            </View>
                        )}
                    </Pressable>
                    <Pressable
                        onPress={() => router.navigate('/Achievements')}
                    >
                        {({ pressed }) => (
                            <View>
                            <View style={[
                                menuStyles.footerButton, 
                                { opacity: pressed ? 0.8 : 1 }
                            ]}>
                                <Image 
                                source={require('../assets/images/Main/achievements_icon.png')} 
                                style={menuStyles.achievementsIcon}
                                />
                            </View>
                            <Text style={[
                                menuStyles.footerText, 
                                { fontSize: 17, opacity: pressed ? 0.8 : 1 }
                            ]}>
                                Progress
                            </Text>
                            </View>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
}