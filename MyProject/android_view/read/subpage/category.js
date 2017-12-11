import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Util from '../../util'
// import List from './list'
export default class category extends React.Component{
  constructor(props){
    super(props);
  }
  goToList(name){
    this.props.navigator.navigate('List',{category:name})
    // this.props.navigator.navigate('TWebView')
    // console.log(name);
  }
  render(){
    let data=this.props.data
    // console.log('Category',data);
    console.log(this.props.navigator);
    let views1=[]
    let views2=[]
    for(let i in data){
      if(i<2){
        views1.push(
          <TouchableOpacity style={styles.item} key={i} onPress={this.goToList.bind(this,data[i].text)}>
              <Text style={styles.text}>{data[i].text}</Text>
          </TouchableOpacity>
        )
      }else{
        views2.push(
          <TouchableOpacity style={styles.item} key={i} onPress={this.goToList.bind(this,data[i].text)}>
            <Text style={styles.text}>{data[i].text}</Text>
          </TouchableOpacity>
        )
      }
    }
    return (
      <View style={styles.container}>
        <View><Text style={styles.title}>分类</Text></View>
        <View style={styles.view}>
          {views1}
          {/* <View style={styles.item}>
            <Text style={styles.text}>互联网</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>散文</Text>
          </View> */}
        </View>
        <View style={styles.view}>
          {views2}
          {/* <View style={styles.item}>
            <Text style={styles.text}>笑话</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.text}>段子</Text>
          </View> */}
        </View>
      </View>
    )
  }
}

let styles=StyleSheet.create({
  container:{
    flex:1,
    marginLeft:10,
    marginRight:10,
    marginTop:10
  },
  title:{
    fontSize:22,
    color:'#111'
  },
  view:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between'
  },
  item:{
    marginBottom:5,
    marginTop:5,
    paddingTop:25,
    paddingBottom:25,
    borderColor:'#ccc',
    borderWidth:0.4,
    width:(Util.size.width-30)/2,
    borderRadius:5,
    alignItems:'center',
    },
  text:{
    // textAlign:'center',
    fontSize:18,
  },
  check:{
    fontSize:16,
    color:'#999'
  }
})
