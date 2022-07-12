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
import {Container} from './components/Container.js';

const navigator = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator screenOptions={{headerTransparent: true}}>
        <navigator.Screen
          options={{headerShown: false}}
          name="MovieZone"
          component={({navigation}) => {
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
                      source={require('../7.png')}
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
                          color: '#B22727',
                        }}>
                        MovieZone
                      </Text>
                    </View>
                  </View>
                  <View style={styles.container}>
                    <TouchableOpacity
                      style={styles.btn}
                      color="green"
                      width="20%"
                      onPress={() => {
                        navigation.navigate('Home');
                      }}>
                      <Text style={styles.btnTxt}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btn}
                      color="green"
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
          }}
        />
        <navigator.Screen name="Home" component={Home} />
        <navigator.Screen name="Favourits" component={Favourits} />
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
    borderWidth: 3,
    borderColor: '#1F4690',
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
    color: '#1F4690',
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
    borderBottomColor: '#3330E4',
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
