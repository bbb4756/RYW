import * as React from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
// import NaverMapView, {
//   Circle,
//   Marker,
//   Path,
//   Polyline,
//   Polygon,
// } from 'react-native-nmap';

// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   useColorScheme,
// } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import {SafeAreaView} from 'react-native-safe-area-context';
// HomeScreen의 navigation prop 타입 지정

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.logoBox}>{/* <MyMap /> */}</View>
    </SafeAreaView>
  );
};

export default Home;

// 스타일 예시 (필요에 맞게 설정하세요)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoBox: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    height: '40%',
    width: '90%',
    fontSize: 50,
    backgroundColor: 'white',
    textAlign: 'right',
    textAlignVertical: 'bottom',
  },
});

// function MyMap(): any {
//   const P0 = {latitude: 37.564362, longitude: 126.977011};
//   const P1 = {latitude: 37.565051, longitude: 126.978567};
//   const P2 = {latitude: 37.565383, longitude: 126.976292};

//   return (
//     <NaverMapView
//       style={{width: '100%', height: '100%'}}
//       showsMyLocationButton={true}
//       center={{...P0, zoom: 16}}
//       onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
//       onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
//       onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
//       <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')} />
//       <Marker
//         coordinate={P1}
//         pinColor="blue"
//         onClick={() => console.warn('onClick! p1')}
//       />
//       <Marker
//         coordinate={P2}
//         pinColor="red"
//         onClick={() => console.warn('onClick! p2')}
//       />
//       <Path
//         coordinates={[P0, P1]}
//         onClick={() => console.warn('onClick! path')}
//         width={10}
//       />
//       <Polyline
//         coordinates={[P1, P2]}
//         onClick={() => console.warn('onClick! polyline')}
//       />
//       <Circle
//         coordinate={P0}
//         color={'rgba(255,0,0,0.3)'}
//         radius={200}
//         onClick={() => console.warn('onClick! circle')}
//       />
//       <Polygon
//         coordinates={[P0, P1, P2]}
//         color={`rgba(0, 0, 0, 0.5)`}
//         onClick={() => console.warn('onClick! polygon')}
//       />
//     </NaverMapView>
// );
// }
