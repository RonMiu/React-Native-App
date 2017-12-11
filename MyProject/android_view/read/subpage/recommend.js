import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Util from '../../util'
var rem1=require('../../../res/img/rem_1.jpg')
var rem2=require('../../../res/img/rem_2.jpg')
var rem3=require('../../../res/img/rem_3.jpg')
var rem4=require('../../../res/img/rem_4.jpg')
var rem5=require('../../../res/img/rem_5.jpg')
var rem6=require('../../../res/img/rem_6.jpg')
var rem7=require('../../../res/img/rem_7.jpg')
var rem8=require('../../../res/img/rem_8.jpg')
export default class recommend extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // name:this.props.name,
      // data:this.props.data
    }
  }
  // componentDidMount(){
  //   this.setState({
  //     name:this.props.name,
  //     data:this.props.data
  //   })
  // }
  showWebPage(url,title){
    this.props.navigator.navigate('TWebView',{url:url,title:title})
  }
  render(){

    let name=this.props.name;
    let data=this.props.data
    // console.log('recommenddata1',data);
    let view1=[]
    let view2=[]
    for(let i in data){
      if(i<4){
        view1.push(<TouchableOpacity key={i} style={[styles.img_item,styles.shadow]} onPress={this.showWebPage.bind(this,data[i].url,data[i].title)}>
          <Image resizeMode='cover' style={styles.img} source={{uri:data[i].img}}/>
        <Text numberOfLines={2} style={styles.text}>{data[i].title}</Text>
        </TouchableOpacity>)
      }else{
        view2.push(<TouchableOpacity key={i} style={[styles.img_item,styles.shadow]} onPress={this.showWebPage.bind(this,data[i].url,data[i].title)}>
          <Image resizeMode='cover' style={styles.img} source={{uri:data[i].img}}/>
        <Text numberOfLines={2} style={styles.text}>{data[i].title}</Text>
        </TouchableOpacity>)
      }
    }
    return (
      <View  style={styles.container}>
        <View>
          <Text style={[styles.title,styles.title1]}>{name}</Text>
        </View>
        <View  style={styles.img_view}>
          {view1}
          {/* <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem1}/>
          <Text numberOfLines={2} style={styles.text}>标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1标题1</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem2}/>
          <Text numberOfLines={2} style={styles.text}>标题2标题2标题2标题2标题2标题2标题2</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem3}/>
          <Text numberOfLines={2} style={styles.text}>标题3</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem4}/>
            <Text numberOfLines={2} style={styles.text}>标题4</Text>
          </View> */}
        </View>
        <View  style={styles.img_view}>
          {view2}
          {/* <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem5}/>
            <Text numberOfLines={2} style={styles.text}>标题1</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem6}/>
            <Text numberOfLines={2} style={styles.text}>标题2</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem7}/>
            <Text numberOfLines={2} style={styles.text}>标题3</Text>
          </View>
          <View style={[styles.img_item,styles.shadow]}>
            <Image resizeMode='cover' style={styles.img} source={rem8}/>
            <Text numberOfLines={2} style={styles.text}>标题4</Text>
          </View> */}
        </View>
        <View></View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:10,
    marginRight:10,
  },
  title:{
    marginTop:10,
    fontSize:22,
  },
  title1:{
    color:'#111'
  },
  text:{
    textAlign:'left',
    width:(Util.size.width-40)/4,
  },
  img_view:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between'
  },
  img_item:{
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  img:{
    width:(Util.size.width-40)/4,
    height:120,
    borderRadius:5,
    borderWidth:0.2,
    borderColor:'gray'
  },
  shadow:{
    shadowOpacity:1,
    shadowColor:'black',
    shadowOffset:{width:1*Util.pixel,height:1*Util.pixel}
  },
})
