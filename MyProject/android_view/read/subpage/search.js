import React from 'react';
import {StyleSheet, Text, View, Image,TextInput} from 'react-native';
import Util from '../../util'

export default class search extends React.Component{
  constructor(props){
    super(props);
    this.state = { content: '' };
  }
  componentDidMount(){

  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
       placeholder='搜索'
       underlineColorAndroid='transparent'
       onChangeText={(content) => this.setState({content})}
       value={this.state.content}
     />
   {/* <Text>{this.state.content}</Text> */}
      </View>
    )
  }
}


let styles=StyleSheet.create({
  container:{
    // flex:1,
    paddingLeft:5,
    paddingRight:5
  },
  text:{
    fontSize:36,
    color:'red'
  },
  input:{
    marginTop:5,
    height:40,
    paddingLeft:5,
    paddingRight:5,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
  }
})
