import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import Maala from '../assets/svg/maala.svg';

const windowWidth = Dimensions.get('window').width;

export default function SignUp() {
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'yellow',
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={require('../assets/Ellipse.png')}
          resizeMode="cover"
          style={styles.Backgroundimage}>
          <Image source={require('../assets/Mask.png')} />
        </ImageBackground>
        <Maala style={styles.chain} />
      </View>
      <View style={styles.welcome}>
        <Text style={styles.LinkTextStyle}>Welcome back</Text>
        <View style={styles.circleFacebook}>
          <Image source={require('../assets/Frame.png')} />
        </View>
        <View style={styles.circleGoogle}>
          <Image source={require('../assets/g.png')} />
        </View>
      </View>
      <View style={styles.conatiner}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <View style={styles.ButtonandLink}>
        <TouchableOpacity style={styles.customBtnBG} onPress={() => {}}>
          <Text style={styles.customBtnText}>Sign in</Text>
        </TouchableOpacity>
        <Text
          style={styles.LinkTextStyle}
          onPress={() => Linking.openURL('https://google.com')}>
          Forgot Password ?
        </Text>
      </View>
      <View style={styles.endAlighnment}>
        <Text style={styles.LinkTextStyle}>Don’t have an account?</Text>
        <Text
          style={styles.textorange}
          onPress={() => Linking.openURL('https://google.com')}>
          Sign up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    paddingHorizontal: 40,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  customBtnBG: {
    backgroundColor: '#E5733F',
    paddingVertical: 15,
    width: 139,
    borderRadius: 1000,
    alignItems: 'center',
  },
  customBtnText: {
    color: 'white',
    fontSize: 16,
  },
  LinkTextStyle: {
    color: 'lightgrey',
    fontSize: 16,
  },
  ButtonandLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  textorange: {
    color: '#ED6A42',
    fontSize: 16,
    marginLeft: 20,
  },
  endAlighnment: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 45,
  },
  circleFacebook: {
    width: 40,
    height: 40,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 100,
    marginLeft: 110,
  },
  circleGoogle: {
    width: 40,
    height: 40,
    borderColor: '#D6281D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: 100,
  },
  welcome: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  Backgroundimage: {
    height: 260,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chain: {
    width: windowWidth,
  },
});
