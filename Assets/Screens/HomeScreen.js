import React, { Component } from 'react';
import {
    View, Text, ImageBackground, StyleSheet,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';

import { Colors } from '../../Assets/Screens/Colors';
import ProgressCircle from 'react-native-progress-circle'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TotalCases: "",
            Deaths: "",
            ActiveCases: "",
            RecoveredCases: "",
            circle_totalCase: "",
            circle_deathCase: "",
            circle_recoverCase: "",
            loader: true
        };
    }

    componentDidMount() {
        this.setState({
            loader: true
        })
        fetch('https://api.covid19api.com/total/dayone/country/pakistan')
            .then(res => res.json())
            .then((res) => {
                console.log('Output: ', res);
                if (res != "" || res != undefined) {
                    this.setState({
                        loader: false
                    })
                }
                let index = res[res.length - 1];
                let index2 = res[res.length - 2];
                var totalCase = index.Confirmed;
                let Death = index.Deaths;
                let RecoveryCase = index.Recovered;
                let ActiveCase = totalCase - index2.Confirmed;
                this.setState({
                    TotalCases: totalCase,
                    Deaths: Death,
                    ActiveCases: ActiveCase,
                    RecoveredCases: RecoveryCase
                });
                console.log('-------SECOND LAST Index---->>', index2)
                console.log('-------LAST Index---->>', index)
                console.log('--------Total Cases------->>', totalCase)
                console.log('--------Deaths ------->>', Death)
                console.log('--------Recovered Cases------->>', RecoveryCase)
                console.log('--------Active Cases------->>', ActiveCase)

            }).catch(err => console.error("-------ERROR------>", err));
    }
    total_case_percentage() {
        let prcnt = (this.state.TotalCases * 0.000001);
        let two_point = prcnt.toFixed(2);
        console.log('-------Total Case Percentage----->>', two_point)
        return two_point
    }
    death_case_percentage() {
        let prcnt_death = Math.floor(this.state.Deaths * 0.001);
        console.log('-------death Case Percentage----->>', prcnt_death)
        return prcnt_death
    }

    render() {
        return (


            <View style={styles.container}>

                <ImageBackground style={styles.bg_image}
                    source={require('../../Assets/Images/Covidbg3.jpg')}
                >
                    <View style={styles.header_bar}>
                        <Text style={styles.header_text}>WORLD STATUS</Text>
                        <TouchableOpacity style={styles.alert_button}>
                            <Text style={styles.alert_text}>Alert</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* Main View with all Data */}
                <View style={styles.chart}>

                    {/* Circles */}
                    <View style={styles.circle_box}>
                        <ProgressCircle
                            percent={this.total_case_percentage()}
                            radius={45}
                            borderWidth={8}
                            color={Colors.red_circle}
                            shadowColor={Colors.circle_shadow}
                            bgColor="#fff">
                            <Text style={styles.circle_title}>{this.total_case_percentage()}{'M'}</Text>
                        </ProgressCircle>
                        <ProgressCircle
                            percent={this.state.RecoveredCases}
                            radius={45}
                            borderWidth={8}
                            color={Colors.theme}
                            shadowColor={Colors.circle_shadow}
                            bgColor="#fff">
                            <Text style={styles.circle_title}>{this.state.RecoveredCases}</Text>
                        </ProgressCircle>
                        <ProgressCircle
                            percent={this.death_case_percentage()}
                            radius={45}
                            borderWidth={8}
                            color={Colors.button_color}
                            shadowColor={Colors.circle_shadow}
                            bgColor="#fff">
                            <Text style={styles.circle_title}>{this.death_case_percentage()}{'K'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.circle_text}>
                        <Text style={styles.circle_title}>Effected</Text>
                        <Text style={styles.circle_title}>Recovered</Text>
                        <Text style={styles.circle_title}>Deaths</Text>
                    </View>

                    {/* Country Case Box */}
                    <View style={styles.country_case_box}>
                        <Text style={styles.country_name}>Pakistan</Text>
                        <Text style={styles.time}>LAST 24 H</Text>
                        <Text style={styles.case_rate}>{this.state.ActiveCases}</Text>
                    </View>

                    {/* 4 Case Box */}
                    <View style={styles.four_caseRate}>
                        <View style={styles.case_box1}>
                            <Text style={styles.box_text}>{this.state.TotalCases}</Text>
                            <Text style={styles.box_text_2}>Total Cases</Text>
                        </View>
                        <View style={styles.case_box2}>
                            <Text style={styles.box_text}>{this.state.ActiveCases}</Text>
                            <Text style={styles.box_text_2}>Today</Text>
                        </View>

                        <View style={styles.case_box3}>
                            <Text style={styles.box_text}>{this.state.Deaths}</Text>
                            <Text style={styles.box_text_2}>Deaths</Text>
                        </View>
                        <View style={styles.case_box4}>
                            <Text style={styles.box_text}>{this.state.RecoveredCases}</Text>
                            <Text style={styles.box_text_2}>Recovery Rate</Text>
                        </View>
                    </View>

                    {/* Button */}
                    <View style={styles.button_box}>
                        <TouchableOpacity style={styles.Button}
                            onPress={() => {this.componentDidMount()}}>
                            <Text style={styles.btn_title}>Refresh</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                {/* </ActivityIndicator> */}
                {this.state.loader &&
                    < View
                        style={{
                            position: "absolute",
                            backgroundColor: "#00000075", width: "100%", height: "100%",
                            justifyContent: "center"
                        }}>

                        <ActivityIndicator
                            animating={this.state.loader}
                            size="large" color={Colors.theme} >
                        </ActivityIndicator>

                    </View>}
            </View>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg_image: {
        width: "100%",
        height: 300,
        opacity: 0.9,
        backgroundColor: "black"
    },
    header_bar: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: "14%",
        marginTop: "9%",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    header_text: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.black,
        marginLeft: 15
    },
    alert_button: {
        width: 60,
        height: "70%",
        backgroundColor: Colors.red,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
    },
    alert_text: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.white
    },
    chart: {
        backgroundColor: Colors.white,
        height: "70%",
        bottom: 0,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        width: '100%',
        position: 'absolute',
    },
    circle_box: {
        marginTop: "6%",
        marginLeft: "6%",
        marginRight: "6%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'plum'
    },
    circle_text: {
        marginTop: "1.5%",
        marginLeft: "9%",
        marginRight: "10%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'yellow'
    },
    circle_title: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.black
    },
    country_case_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: "5.5%",
        marginRight: "5.5%",
        marginTop: "6%",
        // backgroundColor:'green'
    },
    country_name: {
        fontSize: 20,
        color: Colors.CountryName,
        fontWeight: '600',
        marginLeft: 20
    },
    time: {
        fontSize: 12,
        color: Colors.Time,
        alignSelf: 'flex-end',
        right: "-120%",
    },
    case_rate: {
        borderWidth: 3,
        borderColor: Colors.red,
        backgroundColor: Colors,
        borderRadius: 5,
        width: "20%",
        height: "100%",
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: Colors.red
    },
    four_caseRate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: "5.5%",
        marginRight: "5.5%",
        flexWrap: 'wrap',
        height: "44%"
    },
    case_box1: {
        width: "47%",
        height: "42%",
        justifyContent: 'center',
        backgroundColor: Colors.homeBox_1,
        marginTop: 15,
        borderRadius: 15
    },
    case_box2: {
        width: "47%",
        height: "42%",
        justifyContent: 'center',
        backgroundColor: Colors.homeBox_2,
        marginTop: 15,
        borderRadius: 15
    },
    case_box3: {
        width: "47%",
        height: "42%",
        justifyContent: 'center',
        backgroundColor: Colors.homeBox_3,
        marginTop: 15,
        borderRadius: 15
    },
    case_box4: {
        width: "47%",
        height: "42%",
        justifyContent: 'center',
        backgroundColor: Colors.homeBox_4,
        marginTop: 15,
        borderRadius: 15
    },
    box_text: {
        marginLeft: 15,
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    box_text_2: {
        marginLeft: 15,
        fontSize: 18,
        color: 'black'
    },
    button_box: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: "4%",
        marginHorizontal: "5.5%",
        top: -40
    },
    Button: {
        width: "100%",
        height: "31%",
        backgroundColor: Colors.theme,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    btn_title: {
        fontSize: 18,
        color: Colors.white
    },
});
