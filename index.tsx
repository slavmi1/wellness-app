// import { Stack } from "expo-router";
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import {useEffect} from 'react';
// import Menu from './Menu';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     'PassionOne-reg': require('../assets/fonts/PassionOne-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }

//   return <Menu/>;
// }



// // import React from "react";
// // import Menu from './Menu';


// // export default function Index() {
// //   return (
// //     <Menu/>
// //   );
// // }