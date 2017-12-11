import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Util from '../util'
import Category from './subpage/category'
import List from './subpage/list'
import Search from './subpage/search'
import Recommend from './subpage/recommend'
import Topic from './subpage/topic'
import TWebView from '../TWebView'
import { StackNavigator } from 'react-navigation';

class Hr extends React.Component{
  render(){
    return(
      <View>
        <View style={styles.hr}></View>
      </View>
    )
  }
}

class read extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isShow:false,
      data:''
    }
  }
  componentDidMount(){
    let self = this;
    self.setState({
      isShow:true,
    })
    Util.get('http://123.57.39.116:3000/data/read?type=config',function(data){
      // console.log(data);
      if(data.status===1){
        let obj=data.data;
        self.setState({
          data:obj,
        })
        // console.log('self.state.data',self.state.data);
      }
    },function(err){
      // console.log('err');
    })
  }

  static navigationOptions = {
    // headerTitle: '阅读',
    header:null,
    headerTitleStyle:{
      color:'black',
      fontSize:16,
    }
  };
  render(){
    let data=this.state.data;
    // console.log('renderdata',data);
    return(
      <View style={styles.container}>
      <Search/>
      <Hr/>
    {this.state.isShow
      ?
      <ScrollView style={styles.container}>
        <Topic data={data.recommendTopic} navigator={this.props.navigation}/>
        <Hr/>
      <Recommend name='热门推荐' data={data.hotTopic} navigator={this.props.navigation}/>
        <Hr/>
      <Category data={data.category} navigator={this.props.navigation}/>
        <Hr/>
      <Recommend name='清新一刻' data={data.other} navigator={this.props.navigation}/>
      </ScrollView>
      :
      <Text>无数据</Text>
    }
    </View>
    )
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: read },
  List: {
    screen: List,
    navigationOptions: ({navigation}) => ({
       headerTitle:navigation.state.params.category,
     }),
   },
  TWebView:{
    screen:TWebView,
    navigationOptions: ({navigation}) => ({
       headerTitle:navigation.state.params.title,
     }),
  },
});

export default class readPage extends React.Component{
  render(){
    return (
        <SimpleApp/>
    )
  }
}

let styles = StyleSheet.create({
  container:{
    flex:1
  },
  hr:{
    borderColor:'#ccc',
    borderWidth:0.3,
    marginBottom:5,
    marginTop:5
  }
})
