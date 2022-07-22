import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Linking, Platform,
  TextInput, TouchableOpacity, Image, ScrollView,
} from 'react-native';


import { Colors } from '../../Assets/Screens/Colors';
import Toast from 'react-native-toast-message';

export default class FormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CNIC: "",
    };
  }

  showToast(errortext) {
    Toast.show({
      type: 'error',
      text1: errortext,
    });
  }

  cnicInput = () => {
    const { CNIC } = this.state;

    if (CNIC == "") {
      this.showToast('Enter your CNIC')
      return
    }
    if (CNIC.length < 13) {
      this.showToast('Enter correct CNIC')
      return
    }
    if (CNIC.length > 13) {
      this.showToast('Enter CNIC without space.')
      return
    }
    if (CNIC.length == 13) {
      this.textInput.clear()
      Platform.OS == "ios" ?
        Linking.openURL(`sms:${1166}&body=${CNIC}`)
        :
        Linking.openURL(`sms:${1166}?body=${CNIC}`)
    return
    }
  }

  render() {
    return (
      <View
        style={styles.container}>
        
        <ScrollView style={{flex:1 }}>

        <Image style={styles.top_image}
          source={require('../../Assets/Images/vacine.jpg')}
        ></Image>

        <Text style={styles.header}>Get</Text>
        <Text style={styles.header2}>Vaccinated !</Text>

        <Text style={styles.CNIC_text}>If you are not vaccinated put your CNIC here and get the code.</Text>

        <TextInput style={styles.textinput}
          keyboardType='number-pad'
          placeholder='Enter your CNIC'
          selectionColor={Colors.theme}
          onChangeText={(cnic) => { this.setState({ CNIC: cnic }) }}
          value={this.state.CNIC}
          ref={input => { this.textInput = input }}
        >
        </TextInput>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, }}>
          <TouchableOpacity style={styles.Button}
            onPress={() => this.cnicInput()}>
            
            <Text style={styles.btn_title}>Done</Text>
          </TouchableOpacity>
          </View>
          
        </ScrollView>
        <Toast />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_image: {
    width: "90%",
    height: 190,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: "6%",
  },
  header: {
    fontSize: 40,
    fontWeight: '600',
    marginLeft: "5.7%",
    marginTop: "3%",
    color: Colors.theme
  },
  header2: {
    fontSize: 40,
    fontWeight: '600',
    marginLeft: "5.7%",
    color: Colors.theme
  },
  CNIC_text: {
    fontSize: 18,
    marginLeft: "5.7%",
    marginTop: "5%",
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: "5.7%",
    marginTop: "3%",
    borderRadius: 15,
    paddingHorizontal: 20,
    fontSize: 20,

  },
  Button: {
    width: "88%",
    height: 52,
    backgroundColor: Colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  btn_title: {
    fontSize: 22,
    color: Colors.white
  },
});