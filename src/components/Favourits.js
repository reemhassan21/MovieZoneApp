import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {deleteMovie, getMovies} from '../../Utils/database';
import LinearGradient from 'react-native-linear-gradient';

export const Favourits = () => {
  const [list, setlist] = useState([]);
  const [flag, setflag] = useState(false);

  const resolve = async () => {
    setlist(await getMovies());
  };
  useEffect(() => {
    resolve();
  }, [flag]);
  return (
    <View style={{padding: 10, marginTop: 50}}>
      <FlatList
        data={list}
        renderItem={({item}) => {
          return (
            <LinearGradient
              colors={['#ABC9FF', '#3330E4']}
              style={styles.container}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <ScrollView style={styles.container}>
                <View style={styles.view}>
                  <View>
                    <Text style={styles.title}>Tile: </Text>
                    <Text style={styles.movieTitle}>{item.Title}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Overview: </Text>
                    <Text style={styles.overview}>{item.Overview}</Text>
                    <Image
                      style={{
                        margin: 10,
                        marginLeft: 100,
                        width: 150,
                        height: 150,
                      }}
                      source={{uri: item.Image}}
                    />
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => {
                        deleteMovie(item.id);
                        setflag(!flag);
                      }}>
                      <Text
                        style={{
                          color: '#3330E4',
                          marginTop: 5,
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}>
                        Remove from favourits
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </LinearGradient>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
  },
  container: {
    flexDirection: 'column',
    borderColor: '#495C83',
    borderRadius: 25,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 5,
  },
  movieTitle: {
    fontSize: 23,
    marginBottom: 5,
    color: '#3330E4',
    fontWeight: 'bold',
    backgroundColor: 'rgba(200,200,200,0.3)',
    padding: 5,
  },
  overview: {
    color: 'black',
    fontSize: 13,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#ABC9FF',
    width: 165,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3330E4',
    marginLeft: 96,
  },
  search: {
    padding: 15,
    height: 45,
    borderColor: '#495C83',
    borderWidth: 1,
    width: '60%',
    marginLeft: '10%',
    marginTop: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
});
