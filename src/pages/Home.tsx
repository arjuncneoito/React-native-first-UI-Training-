import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  setTimeout(() => {
    navigation.replace('Screen2');
  }, 1500);
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <ImageBackground
        source={require('../assets/heartschain.png')}
        resizeMode="cover"
        style={styles.Backgroundimage}>
        <ImageBackground
          source={require('../assets/home.png')}
          style={styles.image}>
          <Image
            source={require('../assets/sparkles.png')}
            style={styles.spark}
          />
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 700,
    marginTop: -635,
    alignItems: 'center',
  },
  Backgroundimage: {
    marginTop: 410,
    height: 400,
    width: '100%',
  },
  spark: {
    marginTop: 200,
    flex: 1,
    resizeMode: 'contain',
  },
});
