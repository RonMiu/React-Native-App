import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import Util from '../../util'
import { StackNavigator } from 'react-navigation';
var image_1=require('../../../res/img/topic_1.jpg')
var image_2=require('../../../res/img/topic_2.jpg')

export default class topic extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // data:this.props.data
    }
  }
  // componentDidMount(){
  //   this.setState({
  //     data:this.props.data
  //   })
  // }
  showWebPage(url,title){
    this.props.navigator.navigate('TWebView',{url:url,title:title})
  }

  render(){
    let data=this.props.data
    let view=[]
    for(let i in data){
      view.push(
          <TouchableOpacity style={styles.img_item} key={i} onPress={this.showWebPage.bind(this,data[i].url,data[i].title)}>
          <Image resizeMode='cover' style={styles.img} source={{uri:data[i].img}}/>
          <Text numberOfLines={2} style={styles.text}>{data[i].title}</Text>
          </TouchableOpacity>
      )
    }

    // console.log('tipicdata',data);
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>推荐专题</Text>
        </View>

        <View style={styles.img_view}>
          {view}
          {/* <View style={styles.img_item}>
            <Image resizeMode='cover' style={styles.img} source={image_1}/>
          <Text numberOfLines={2} style={styles.text}>222</Text>
          </View>
          <View style={styles.img_item}>
          <Image resizeMode='cover' style={styles.img} source={image_2}/>
          <Text numberOfLines={2} style={styles.text}>111</Text>
          </View> */}
        </View>
        <View>
          <Text style={styles.check}>查看更多同期专题&gt;&gt;</Text>
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
  },
  title:{
    fontSize:22,
    color:'#111'
  },
  text:{
    textAlign:'left',
    width:(Util.size.width-30)/2,
  },
  img_view:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between'
  },
  img_item:{
    marginTop:5,
    marginBottom:5,
  },
  img:{
    width:(Util.size.width-30)/2,
    height:100,
    borderRadius:5,
  },
  check:{
    fontSize:16,
    color:'#999'
  }
})
