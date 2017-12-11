import React from 'react';
import {StyleSheet, Text, View, Image, WebView} from 'react-native';
import ToiletWebView from './subpage/toiletWebView'
import Util from '../util'
export default class toiletPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let styles =StyleSheet.create({
      container:{
        flex:1,
      }
    })
    return (
      <View style={styles.container}>
        <ToiletWebView/>
      </View>
    )
  }
}
