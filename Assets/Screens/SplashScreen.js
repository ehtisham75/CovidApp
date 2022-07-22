import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, } from 'react-native';
import { Colors } from '../../Assets/Screens/Colors';
import { CommonActions } from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'IntroScreen',
              //   params: {}
            },
          ],
        }));

    }, 2500);
  }

  render() {
    return (
      <View
        style={styles.container}>

        <ImageBackground style={styles.bgimage}
          source={require('../../Assets/Images/Covidbg3.jpg')} >
        </ImageBackground>
        <Text style={styles.text}>Coronavirus Tracker</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgimage: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
    backgroundColor: "black"
  },
  text: {
    fontSize: 40,
    position: "absolute",
    textAlign: 'center',
    fontFamily: 'Righteous-Regular',
    color: Colors.white,
  },
});
