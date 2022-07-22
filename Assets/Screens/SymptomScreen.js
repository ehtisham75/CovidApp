import React, { Component } from 'react';
import {View, Text, StyleSheet,Image, ScrollView } from 'react-native';
import { Colors } from '../../Assets/Screens/Colors';

export default class SymptomScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // Symptom Boxes Design ___
  SymptomBoxDesign(title, desc, img) {
    return (
      <View style={styles.symp_box}>
        <Text style={styles.symp_title}>{title}</Text>
        <Text style={styles.symp_text}>{desc}</Text>
        <Image style={styles.box_img}
          source={img}></Image>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        {/* { Title Headers } */}
        <View>
          <Text style={styles.covid_header}>Covid-19</Text>
          <Text style={styles.header}>Symptoms</Text>
        </View>

        <View style={styles.header_line}></View>

        {/* { Symptom Boxes } */}

          <View style={{
            flexDirection: 'row',
          }}>
            {this.SymptomBoxDesign(
              "Cold",
              "It have sensation produced by loss of heat from the body .",
              require('../../Assets/Images/symp.png')
            )}
            {this.SymptomBoxDesign(
              "Dry Cough",
              "Its appears to spread from person to person among those in close contacts",
              require('../../Assets/Images/symp.png')
            )}
          </View>

          <View style={{
            flexDirection: 'row',
          }}>
            {this.SymptomBoxDesign(
              "Fever",
              "Having fever is a sign that something out of ordinary is going on in your body.",
              require('../../Assets/Images/symp.png')
            )}
            {this.SymptomBoxDesign(
              "Breathlessness",
              "It describe as intense tightening in the chest, air hunger and feeling of suffocation.",
              require('../../Assets/Images/symp.png')
            )}
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon_bar: {
    flexDirection: 'row',
    marginLeft: "6%",
    marginRight: "6%",
    marginTop: "8%",
    justifyContent: 'space-between',
  },
  covid_header: {
    fontSize: 20,
    color: 'black',
    marginLeft: "5.7%",
    marginTop: "15%"
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginLeft: "5.7%"
  },
  header_line: {
    borderBottomWidth: 5,
    borderColor: Colors.theme,
    marginLeft: "5.7%",
    marginRight: "37%",
    borderRadius: 5
  },
  symp_box: {
    backgroundColor: Colors.white,
    marginLeft: "5.7%",
    marginTop: "7%",
    width: "41%",
    height: 210,
    borderRadius: 15,
  },
  symp_title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    margin: 10,
  },
  symp_text: {
    fontSize: 12,
    color: 'black',
    marginHorizontal: 10,
  },
  box_img: {
    width: "24%",
    height: "55%",
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute'
  }
});