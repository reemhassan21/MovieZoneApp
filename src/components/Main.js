import React, {useState} from 'react';  
import {Container} from './Container.js';

import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
export const Main = ({navigation}) => {
    return (
      <Container>
        <StatusBar hidden />
        <View style={{height: '100%'}}>
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              marginTop: '30%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: '35%',
                height: '50%',
                marginBottom: '-35%',
              }}
              source={require('../../7.png')}
            />
            <View style={styles.welcomeBox}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: 'bold',
                  color: '#1F4690',
                }}>
                Welcome to{' '}
              </Text>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: 'bold',
                  color: '#DF7861',
                }}>
                MovieZone
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.btn} 
              width="20%"
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.btnTxt}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn} 
              width="20%"
              onPress={() => {
                navigation.navigate('Favourits');
              }}>
              <Text style={styles.btnTxt}>Favourits</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }

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