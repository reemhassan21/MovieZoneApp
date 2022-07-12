import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useQuery} from 'react-query';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import {addMovie} from '../../Utils/database.js';
import LinearGradient from 'react-native-linear-gradient';

export const Home = () => {
  const {
    isLoading: topLoading,
    error: topError,
    isSuccess: topSuccess,
    data: topData,
  } = useQuery('topRated', () =>
    axios(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=18970143c0cbd465d6169d57ee7ef6d5',
    ),
  );
  const {
    isLoading: upLoading,
    error: upError,
    isSuccess: upSuccess,
    data: upData,
  } = useQuery('upComing', () =>
    axios(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=18970143c0cbd465d6169d57ee7ef6d5',
    ),
  );
  const {
    isLoading: nowLoading,
    error: nowError,
    isSuccess: nowSuccess,
    data: nowData,
  } = useQuery('nowPlaying', () =>
    axios(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=18970143c0cbd465d6169d57ee7ef6d5',
    ),
  );
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const searchURL =
    'https://api.themoviedb.org/3/search/movie?api_key=18970143c0cbd465d6169d57ee7ef6d5&query=';
  const [Search, setSearch] = useState('');
  const {error, isSuccess, data} = useQuery(
    ['search', Search],
    () => axios(searchURL + Search),
    {enabled: !!Search},
  );
  const imgURL = 'https://image.tmdb.org/t/p/original';
  const filterList = ['Top rated', 'Upcoming', 'Now playing'];
  const [currentList, setCurrentList] = useState([]);
  const [dropDownVal, setDropDownVal] = useState('');
  const favList = [];
  const resolve = async () => {
    if (topLoading) {
      console.log('is loadind');
      setTopRated([]);
    } else if (topSuccess) {
      setTopRated(topData.data);
      setCurrentList(topData.data);
    } else console.log(topError);
  };
  useEffect(() => {
    resolve();
  }, [topSuccess]);

  const upResolve = async () => {
    if (upLoading) {
      console.log('is loading');
      setUpComing([]);
    } else if (upSuccess) {
      setUpComing(upData.data);
    } else console.log(upError);
  };
  useEffect(() => {
    upResolve();
  }, [upSuccess]);

  const nowResolve = async () => {
    if (nowLoading) {
      console.log('is loading');
      setNowPlaying([]);
    } else if (topSuccess) {
      setNowPlaying(nowData.data);
    } else console.log(nowError);
  };
  useEffect(() => {
    nowResolve();
  }, [nowSuccess]);

  const searchHandler = () => {
    if (error) {
      console.log(error);
    }
    if (isSuccess) {
      setCurrentList(data.data);
    }
  };

  const handleReset = () => {
    if (dropDownVal == 'Top rated') {
      setCurrentList(topRated);
    } else if (dropDownVal == 'Upcoming') {
      setCurrentList(upComing);
    } else if (dropDownVal == 'Now playing') setCurrentList(nowPlaying);
    else setCurrentList(topRated);
  };
  return (
    <View style={{padding: 10}}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.search}
            placeholderTextColor="#3330E4"
            placeholder="Search"
            onChangeText={newText => setSearch(newText)}
          />
          <TouchableOpacity
            onPress={() => {
              searchHandler();
            }}
            style={styles.goBtn}>
            <Text style={styles.goTxt}>Go</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.filter}>Filter:</Text>
          <SelectDropdown
            data={filterList}
            buttonStyle={{
              marginTop: 10,
              width: 120,
              height: 30,
              backgroundColor: '#F0EBE3',
            }}
            defaultValue={'Top rated'}
            dropdownIconPosition={'right'}
            onSelect={(selectedItem, index) => {
              if (selectedItem == 'Top rated') {
                setDropDownVal('Top rated');
                setCurrentList(topRated);
              } else if (selectedItem == 'Upcoming') {
                setDropDownVal('Upcoming');
                setCurrentList(upComing);
              } else {
                setDropDownVal('Now playing');

                setCurrentList(nowPlaying);
              }
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => {
              handleReset();
            }}>
            <Text style={styles.resultTxt}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={currentList.results}
        renderItem={({item}) => {
          return (
            <LinearGradient
              colors={['#ABC9FF', '#3330E4']}
              style={styles.container} 
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <ScrollView>
                <View style={styles.view}>
                  <View>
                    <Text style={styles.title}>Tile: </Text>
                    <Text style={styles.movieTitle}>{item.original_title}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Overview: </Text>
                    <Text style={styles.overview}>{item.overview}</Text>
                    <Image
                      style={{
                        margin: 10,
                        marginLeft: 100,
                        width: 150,
                        height: 150,
                      }}
                      source={{uri: imgURL + item.poster_path}}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      favList.push(item);
                      addMovie(
                        item.title,
                        imgURL + item.poster_path,
                        item.overview,
                      );
                    }}>
                    <Text
                      style={{
                        color: '#3330E4',
                        marginTop: 5,
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Add to favourits
                    </Text>
                  </TouchableOpacity>
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
  header: {
    backgroundColor: '#ABC9FF',
    borderColor: '#3330E4',
    borderWidth: 1,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    marginTop: 50,
    marginBottom: 10,
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
    color: '#3330E4',
    marginBottom: 5,
    fontWeight: 'bold',
    backgroundColor: 'rgba(200,200,200,0.3)',
    padding: 5,
  },
  overview: {
    color: 'black',
    fontSize: 13,
    marginBottom: 5,
  },
  resultTxt: {
    fontSize: 15,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#495C83',
  },
  btn: {
    backgroundColor: '#ABC9FF',
    width: 125,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#3330E4',
    marginLeft: 110,
  },
  goTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 3,
    marginTop: 5,
    color: '#495C83',
  },
  search: {
    padding: 15,
    height: 45,
    borderColor: '#3330E4',
    borderWidth: 1,
    width: '60%',
    marginLeft: '10%',
    marginTop: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  goBtn: {
    borderWidth: 1,
    borderColor: '#293462',
    height: 30,
    width: 50,
    borderRadius: 25,
    marginTop: 20,
    marginLeft: 15,
    backgroundColor: 'white',
  },
  filter: {
    fontSize: 18,
    color: '#3330E4',
    fontWeight: 'bold',
    margin: 15,
    marginLeft: 60,
    marginRight: 20,
  },
  resetBtn: {
    marginTop: 12,
    borderRadius: 15,
    backgroundColor: 'white',
    height: 28,
    marginLeft: 15,
    width: 70,
    borderWidth: 1,
  },
});

/*
dark moov: background : #495C83
wheat : text : #E4DCCF
light moov : #C9BBCF

dark blue: #1F4690
light moov: btn bgc: #C9BBCF
*/
