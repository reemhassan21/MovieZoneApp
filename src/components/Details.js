import React, {useEffect, useState} from 'react';  
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Container } from './Container';
export const Details = ({navigation, route}) => {
  const imgURL = 'https://image.tmdb.org/t/p/original';
  
  return (
      <LinearGradient
      colors={['#ABC9FF','#DF7861']}
              style={styles.container} 
              start={{x: 0, y: 0.7}}
      > 
        <ScrollView > 
        <View style={styles.titleContainer}> 
          <Text style={styles.heading}>Tile: </Text>
          <Text style={styles.movieTitle}>{route.params.movie.original_title}</Text>
        </View>
        <View style={styles.overviewContainer}>
          <Text style={styles.heading}>Overview: </Text>
          <Text style={styles.overview}>{route.params.movie.overview}</Text>
          <Image
            style={{  
              marginTop:'5%', 
              width: 300,
              height: 300, 
              marginLeft:'9%',
            }}
            source={{uri: imgURL + route.params.movie.poster_path}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.heading}>Release date: </Text>
          <Text style={styles.info}>{route.params.movie.release_date}</Text>
          <Text style={styles.heading}>Vote average: </Text>
          <Text style={styles.info}>{route.params.movie.vote_average}</Text>
          <Text style={styles.heading}>Vote count: </Text>
          <Text style={styles.info}>{route.params.movie.vote_count}</Text>
        </View>  
    </ScrollView>  
      
      </LinearGradient>
    

  );
};
const styles = StyleSheet.create({
  container:{
    marginTop:'15%',
    padding:'5%',
    width:'100%', 
  },
  heading:{
    fontSize:23,
    fontWeight:'bold',
    marginBottom:'2%',
    color:'black'
  },
  movieTitle:{
    fontSize:25,
    fontWeight:'bold',
    color: '#3330E4',
    backgroundColor: 'rgba(230,190,230,0.5)',
    width:'100%',
    textAlign:'center',
    borderRadius:25,
    padding:5
  },
  overview:{
    fontSize:18,
    color:'black', 
  },
  info:{
    fontSize:20,
    color:'#1F4690',  
    fontWeight:'bold'
  },
  titleContainer:{
    
    marginBottom:'4%',
    width:'100%',
  },
  overviewContainer:{
    marginBottom:'4%',
    width:'100%',

  },
  infoContainer:{ 
    width:'100%', 

  }
})