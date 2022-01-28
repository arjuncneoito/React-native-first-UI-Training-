import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function HomeRing({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 1500);
  return (
    <View>
      <View style={styles.center}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <ImageBackground
          source={require('../assets/home.png')}
          style={styles.image}>
          <Image
            source={require('../assets/sparkles.png')}
            style={styles.spark}
          />
          <Text style={styles.person}>Personalized Jewelry</Text>
        </ImageBackground>
        <Image source={require('../assets/ring.png')} style={styles.ring} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 700,
    marginTop: -100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spark: {
    marginTop: 200,
    flex: 1,
    resizeMode: 'contain',
  },
  person: {
    marginBottom: 200,
    fontSize: 18,
    color: '#FFFFFF',
  },
  ring: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  center: {
    alignItems: 'center',
  },
});
