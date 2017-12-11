import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import ToiletPage from './android_view/toilet/toiletPage.js'
import ReadPage from './android_view/read/readPage'
import WeatherPage from './android_view/weather/weatherPage'
import Setting from './android_view/setting/setting'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component < {} > {
  constructor() {
    super();
		this.state={
            selectedTab:'Toilet',
        }
  }
  componentDidMount() {
  }
  render() {
    return (
			<View style={styles.container}>
				<TabNavigator>

          <TabNavigator.Item
				    selected={this.state.selectedTab === 'Toilet'}
				    title="Find Toilet"
						titleStyle={styles.tabText}
				    renderIcon={() => <Image style={styles.icon}  source={require('./res/img/toilet.png')} />}
				    renderSelectedIcon={() => <Image style={styles.icon}  source={require('./res/img/toilet-selected.png')} />}
				    onPress={() => this.setState({selectedTab:'Toilet'})}>
            <ToiletPage selectedTab={this.state.selectedTab}/>
				  </TabNavigator.Item>

				  <TabNavigator.Item
				    selected={this.state.selectedTab === 'Weather'}
				    title="Weather"
						titleStyle={styles.tabText}
				    renderIcon={() => <Image style={styles.icon} source={require('./res/img/weather.png')} />}
				    renderSelectedIcon={() => <Image style={styles.icon}  source={require('./res/img/weather-selected.png')} />}
				    onPress={() => this.setState({selectedTab:'Weather'})}>
				    <WeatherPage selectedTab={this.state.selectedTab}/>
				  </TabNavigator.Item>

					<TabNavigator.Item
				    selected={this.state.selectedTab === 'Read'}
				    title="Read"
						titleStyle={styles.tabText}
				    renderIcon={() => <Image style={styles.icon}  source={require('./res/img/read.png')} />}
				    renderSelectedIcon={() => <Image style={styles.icon}  source={require('./res/img/read-selected.png')} />}
				    onPress={() => this.setState({selectedTab:'Read'})}>
				   	<ReadPage selectedTab={this.state.selectedTab}/>
				  </TabNavigator.Item>

					<TabNavigator.Item
				    selected={this.state.selectedTab === 'Setting'}
				    title="Setting"
						titleStyle={styles.tabText}
				    renderIcon={() => <Image style={styles.icon}  source={require('./res/img/setting.png')} />}
				    renderSelectedIcon={() => <Image style={styles.icon}  source={require('./res/img/setting-selected.png')} />}
				    onPress={() => this.setState({selectedTab:'Setting'})}>
				   	<Setting selectedTab={this.state.selectedTab}/>
				  </TabNavigator.Item>
				</TabNavigator>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
	icon:{
		width:22,
		height:22
	},
	tabText: {
        fontSize: 10,
        color: 'black',
    },
});
