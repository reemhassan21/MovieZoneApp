import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = ({children}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ABC9FF', '#3330E4']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={{flex: 1, marginHorizontal: 15}}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};
