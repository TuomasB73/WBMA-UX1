import React from 'react';
import {
  StatusBar,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Menu, Settings } from 'react-native-feather';

const mediaArray = [
  {
    key: '0',
    title: 'Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    thumbnails: {
      w160: 'http://placekitten.com/160/161',
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: '1',
    title: 'Title 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/164',
    },
    filename: 'http://placekitten.com/2041/1922',
  },
  {
    key: '2',
    title: 'Title 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const Flexboxdemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='rgb(255,160,91)' barStyle='light-content' />

      <View style={styles.header}>
        <ImageBackground
          source={require('./assets/landscape.jpg')}
          style={styles.bgImage}
          imageStyle={{ borderBottomRightRadius: 65 }}
        ></ImageBackground>
        <Menu stroke='white' width={32} height={32} style={styles.menu}></Menu>
        <Settings
          stroke='white'
          width={32}
          height={32}
          style={styles.settings}
        ></Settings>
        <Text style={styles.hello}>Hello Stranger, hope you are ok</Text>
      </View>

      <View style={styles.infoArea}>
        <View style={styles.areaA}>
          <Text>Hello World</Text>
        </View>

        <View style={styles.areaB}>
          <FlatList
            horizontal={true}
            data={mediaArray}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.catpic}>
                  <Image
                    style={styles.image}
                    source={{ uri: item.thumbnails.w160 }}
                  />
                  <View style={styles.catInfo}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Flexboxdemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    height: '100%',
    paddingTop: 0,
  },
  header: {
    height: 270,
    backgroundColor: 'white',
  },
  bgImage: {
    width: Dimensions.get('window').width,
    height: 270,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  settings: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  hello: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  infoArea: {
    flex: 6,
    flexDirection: 'column',
  },
  areaA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaB: {
    flex: 8,
    padding: 20,
  },
  catpic: {
    width: 170,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'azure',
    elevation: 10,
  },
  catInfo: {
    width: 150,
    alignItems: 'center',
  },
  title: {
    color: 'rgb(255,160,91)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    margin: 10,
  },
});
