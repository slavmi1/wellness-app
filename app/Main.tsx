import React, { useEffect } from 'react';
import { menuStyles } from "@/styles/styles";
import {Image, ImageBackground, Pressable, StatusBar, Text, View } from "react-native";
import { setNavigationBarColor } from './utils/navigationBar';

export default function Main(){
    useEffect(() => {
        setNavigationBarColor('#E1E1E1');
      });
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
                        onPress={() => console.log('Переход в меню настроек.')}  // Обработчик нажатия
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
                            onPress={() => console.log('Переход в магазин.')}
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
                            onPress={() => console.log('Переход в гардероб.')}
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

                </ImageBackground>
            </View>
            <View style={menuStyles.footer}></View>
        </View>
    );
}