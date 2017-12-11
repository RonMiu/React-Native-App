import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  } from 'react-native';
  import { StackNavigator } from 'react-navigation';

import Util from '../util';
import Help from './subpage/help';
import Detail from './subpage/detail';
import Tips from './subpage/tips';
var logo=require('../../res/img/logo.png')

class SettingView extends Component{
  static navigationOptions = {
    header:null,
    headerTitleStyle:{
      color:'black',
      fontSize:16,
    }
  };
  render(){
    console.log(this.props)
    return(
      <ScrollView style={styles.container}>
        <View style={styles.bg}>
          <Text style={{fontSize:20,color:'#1296DB',marginTop:20,fontWeight:'bold'}}>
            MyApp
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={logo} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this,'功能介绍')}>
            <View style={[styles.item, {borderTopWidth:1}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>联系我们</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  _showHelp(){
    this.props.navigation.navigate('Help');
  }

  _showTips(){
    this.props.navigation.navigate('Tips');
  }

  _showAbout(){
    Alert.alert(
      '联系方式',
      '如有问题, 请联系444766798@qq.com',
      [
        {text: '确认'},
      ],
      { cancelable: true }
    )
  }

  _showDetail(){
    this.props.navigation.navigate('Detail');
  }
}

const SettingPage = StackNavigator({
  Home: { screen: SettingView },
  Help: {
    screen: Help,
    navigationOptions: ({navigation}) => ({
       headerTitle:'帮助'
     }),
   },
  Detail:{
    screen:Detail,
    navigationOptions: ({navigation}) => ({
       headerTitle:'功能介绍',
     }),
  },
  Tips:{
    screen:Tips,
    navigationOptions: ({navigation}) => ({
        headerTitle:'服务条款',
     }),
  },
});

export default class Setting extends Component{
  render(){
    return(
      <SettingPage/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: 1,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    // backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:100,
    height:100
  }
});
