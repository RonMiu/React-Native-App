import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
  } from 'react-native';

import Util from '../../util'
var pic1=require('../../../res/img/setting-1.png')
var pic2=require('../../../res/img/setting-2.png')
var pic3=require('../../../res/img/setting-3.png')

export default class Detail extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.text}>附近卫生间并导航</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={pic2}
              />
          </View>
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>实时天气预报</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={pic3}
              />
          </View>
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>阅读美好文章</Text>
          <View style={styles.items}>
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={pic1}
              />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  center:{
    justifyContent:'center',
    alignItems: 'center'
  },
  icon:{
    width:300,
    height:530
  },
  items:{
    width:300,
    marginBottom:10,
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 3*Util.pixel, height: 3*Util.pixel},
  },
  text:{
    fontSize:16,
    fontWeight:'300',
    marginBottom:15,
    marginLeft:10,
    marginTop:15
  }
});
