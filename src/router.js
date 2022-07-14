import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {Home} from './components/Home.js';
import {Favourits} from './components/Favourits.js';
import { Details } from './components/Details.js';
import { Main } from './components/Main.js';

const navigator = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator screenOptions={{headerTransparent: true}}>
        <navigator.Screen
          options={{headerShown: false}}
          name="MovieZone"
          component={Main}
        />
        <navigator.Screen name="Home" component={Home} />
        <navigator.Screen name="Favourits" component={Favourits} />
        <navigator.Screen name="Details" component={Details} />

      </navigator.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ABC9FF',
    width: '40%',
    height: '35%',
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderWidth: 2,
    borderColor: '#DF7861',
  },
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '25%',
    marginTop: '5%',
  },
  btnTxt: {
    color: '#3330E4',
    marginTop: '8%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  welcomeBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(215,235,225,0.6)',
    padding: 10,
    width: '90%',
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderWidth: 2,
    borderColor: '#ABC9FF',
    borderBottomColor: '#DF7861',
  },
});
/*
dark moov: background : #495C83
wheat : text : #E4DCCF
light moov : #C9BBCF
dark blue: #1F4690 

blue: #3330E4
light blue :#ABC9FF
*/
