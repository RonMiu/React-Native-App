import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Util from '../util'
import WeatherWebView from './subpage/weatherWebView'
// import TWebView from '../TWebView'

export default class weatherPage extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // console.log(Util.size);
    // Util.get('http://123.57.39.116:3000/data/read?type=config',function(data){
    //   // console.log(data);
    // },function(error){
    //   alert(error)
    // })
  }

  render(){
    // console.log(111);
    let styles =StyleSheet.create({
      container:{
        flex:1,
      }
    })
    return (
      <View  style={styles.container}>
        <WeatherWebView/>
      {/* <Text>{Util.pixel}</Text> */}
      </View>
    )
  }
}
