import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions,PixelRatio} from 'react-native';

export default {
  size:{
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width
  },

  pixel:PixelRatio.get(),

  get:function(url,successCallback,failCallback){
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
      successCallback(json)
    })
    .catch((error)=>{
      failCallback(error)
    })
  }
}
