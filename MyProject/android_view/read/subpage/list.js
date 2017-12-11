import React from 'react';
import {StyleSheet, Text, View, Image,FlatList,TouchableOpacity} from 'react-native';
import Util from '../../util'
import { StackNavigator } from 'react-navigation';
export default class list extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:'',
    }
  }


  componentDidMount(){
    let name = this.props.navigation.state.params.category;
    let type=this.getType(name);
    let self=this
    // console.log(type);
    let url = "http://123.57.39.116:3000/data/read?type="+type
    Util.get(url,function(data){
      console.log(name,data);
      if(data.status===1){
        self.setState({
          data:data.data
        })
      }else{
        alert('无数据')
      }
        // console.log('dara',self.state.data);
    },function(err){
        alert('服务出现异常')
    })
  }

  getType(name){
    let type;
    switch(name){
      case '互联网':
        type='it';
        break;
      case '笑话':
        type='cookies';
        break;
      case '管理':
        type='manager';
        break;
        case '散文':
          type='sanwen';
          break;
      default :
          type='it';
    }
    return type
  }

  showWebPage(url,title){
    this.props.navigation.navigate('TWebView',{url:url,title:title})
  }

  _onRefresh() {
      
    }

  render(){
    return (
      <FlatList
        data={this.state.data}
        onRefresh={this._onRefresh.bind(this)}
        refreshing={false}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={this.showWebPage.bind(this,item.url,item.title)}>
            <View>
              <Image style={styles.img} source={{uri:item.img}}/>
            </View>
            <View style={styles.textWrap}>
              <Text style={styles.text} numberOfLines={2}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
            {/* <Text style={styles.text}>{item.img}</Text> */}
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}

let styles=StyleSheet.create({
  item:{
    marginTop:5,
    marginBottom:5,
    height:78,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    borderBottomColor:'red',
    borderBottomWidth:0.5,
  },
  img:{
    width:72,
    height:72,
    marginRight:5,
    borderRadius:5,
  },
  textWrap:{
    // alignItems:'center',
    width:Util.size.width-90,
  },
  text:{
    fontSize:16,
  },
  time:{
    fontSize:15,
    color:'#aaa',
  },
})
