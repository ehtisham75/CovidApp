import React, { useState } from 'react';
import { StyleSheet, View, Text, Image
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../Assets/Screens/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation,CommonActions } from '@react-navigation/native';

const IntroData = [
  {
    title: 'Wear a Mask',
    key: '198767859',
    text: 'When you go outside of your Home then obiously you have to wear a mask for keeping safe from Covid-19',
    image: require('../../Assets/IntroImages/mask.png'),
    backgroundColor: Colors.theme,
  },
  {
    title: 'Wash Your Hand',
    key: '1987676',
    text: 'When you come to your home then obiously you have to wash your hand for keeping safe from Covid-19',
    image: require('../../Assets/IntroImages/hand.png'),
    backgroundColor: Colors.theme,
  },
  {
    title: 'Social Distance',
    key: '19876459',
    text: 'When you go outside of your home then keep distance of 2 meter for keeping safe from Covid-19',
    image: require('../../Assets/IntroImages/distance.png'),
    backgroundColor: Colors.theme
  },
  {
    title: 'Online Doctor',
    key: '19878857659',
    text: 'When you go outside of your then obiously you have to wear a mask for keepin safe from Covid-19',
    image: require('../../Assets/IntroImages/doctor.png'),
    backgroundColor: Colors.theme,
  },
];

const App = () => {
  const navigation = useNavigation();

  const onDone = () => {
   navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'HomeScreen',
            //   params: {}
          },
        ],
      }));
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {<Ionicons name='arrow-forward' color={'white'} size={24} />}
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View
        style={styles.buttonCircle}
      >
        {<Ionicons name='checkmark' color={'white'} size={24} />}
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 50,
        }}>

        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={IntroData}
        renderItem={RenderItem}
        onDone={onDone}
        renderNextButton={RenderNextButton}
        renderDoneButton={RenderDoneButton}
      />

    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introImageStyle: {
    width: 280,
    height: 280,
    // flex:1,
    marginBottom: "10%",
    resizeMode: 'contain',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: "5%"
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 15,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

