// import React from "react";
// import { menuStyles } from "@/styles/styles";
// import {Image, ImageBackground, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

// export default function Menu(){
//     return (
//         <View style={styles.main}>
//             <StatusBar backgroundColor="#6EDB71"/>
//             <View style={styles.header}>
//                 <Image style={styles.tinyLogo} source={require('../assets/images/tiny-logo.png')}/>
//                 <View style={styles.headerTables}>
//                     <View style={styles.lvlTable}>
//                         <Image source={require("../assets/images/lvl_icon.png")}/>
//                         <Text style={styles.headerText}>13 LVL</Text>
//                     </View>
//                     <View style={styles.coinTable}>
//                         <Text style={styles.headerText}>99999</Text>
//                         <Image source={require("../assets/images/coin_icon.png")}/>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.bodyButtons}>
//                 <Pressable>
//                     <View style={styles.settingsButton}>
//                         <Image source={require("../assets/images/setting_icon.png")}/>
//                     </View>
//                 </Pressable>
//                 <Pressable>
//                     <View style={styles.shopButton}>
//                         <Image source={require("../assets/images/shop_icon.png")}/>
//                     </View>
//                 </Pressable>
//                 <Pressable>
//                     <View style={styles.clothesButton}>
//                         <Image source={require("../assets/images/clothes_icon.png")}/>
//                     </View>
//                 </Pressable>
//             </View>
//             <ImageBackground style={styles.backImage} source={require("../assets/images/background.png")}>
//                 <Image style={styles.avatar} source={require("../assets/images/avatar.png")}/>
//             </ImageBackground>
//             <View style={styles.footer}>
//                 <Pressable style={styles.footerButton}>
//                     <Image style={{width: 52, height: 61}} source={require("../assets/images/stats_icon.png")}/>
//                 </Pressable>
//                 <Pressable style={styles.footerButton}>
//                     <Image style={{width: 62, height: 62}} source={require("../assets/images/rating_icon.png")}/>
//                 </Pressable>
//                 <Pressable style={styles.footerButton}>
//                     <Image style={{width: 75, height: 54}} source={require("../assets/images/challenge_icon.png")}/>
//                 </Pressable>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         justifyContent: 'space-between',
//         backgroundColor: 'fff'
//     },
//     header: {
//         padding: 5,
//         backgroundColor: '#6EDB71',
//         height: 118,
//         borderBottomWidth: 10,
//         borderColor: '#54AB57',
//     },
//     tinyLogo: {
//         width: 68,
//         height: 20,
//         alignSelf: 'center'
//     },
//     headerTables: {
//         flexDirection: 'row',
//         justifyContent: 'space-around'
//     },
//     lvlTable: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#5FBB62',
//         width: 165,
//         height: 68,
//         borderRadius: 30,
//     },
//     coinTable: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#5FBB62',
//         width: 165,
//         height: 68,
//         borderRadius: 30,
//     },
//     headerText: {
//         fontFamily: 'PassionOne-reg',
//         fontSize: 32,
//         color: '#fff'
//     },
//     bodyButtons: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         height: 88
//     },
//     settingsButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 69,
//         width: 69,
//         marginRight: 68,
//         borderRadius: 25,
//         borderColor: '#E3E3E3',
//         borderWidth: 5,

//     },
//     shopButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 69,
//         width: 87,
//         borderRadius: 25,
//         borderColor: '#E3E3E3',
//         borderWidth: 5,
//     },
//     clothesButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 69,
//         width: 87,
//         borderRadius: 25,
//         borderColor: '#E3E3E3',
//         borderWidth: 5,
//     },
//     backImage: {
//         height: 403,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     avatar: {
//         width: 245,
//         height: 439
//     },
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         height: 140,
//         backgroundColor: '#6EDB71',
//         borderTopColor: '#54AB57',
//         borderTopWidth: 10,
//     },
//     footerButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#5FBB62',
//         height: 100,
//         width: 100,
//         borderRadius: 20
//     }
//   })