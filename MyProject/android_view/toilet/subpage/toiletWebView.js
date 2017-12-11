import React from 'react';
import {StyleSheet, Text, View, Image, WebView} from 'react-native';
const HTML = {uri:'file:///android_asset/html/nearby.html'}
export default class toiletWebView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      url:this.props.url,
      isError:false
    }
  }
  showError(){
    this.setState({
      isError:true
    })
  }
  render(){
    const styles =StyleSheet.create({
      container:{
        flex:1,
      },
      errorInfo:{
        // marginTop:30,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      text:{color:'red'}
    })
    return (
      <View style={styles.container}>
        {
          this.state.isError
          ?
          <View style={styles.errorInfo}>
            <Text style={styles.text}>网络有问题, 请刷新!!!</Text>
          </View>
          :
          <WebView
            onError={this.showError.bind(this)}
            startInLoadingState={true}
            // source={{uri:this.state.url}}
            source={HTML}
          />
          }
      </View>
    )
  }
}
