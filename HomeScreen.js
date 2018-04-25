var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin: 10,
  },
  thumbnail: {
    backgroundColor:'gray',
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 0,
    backgroundColor: '#F5FCFF',
  },
});

import React, { Component } from 'react';
import react, { YellowBox, NativeModules } from 'react-native';
import{ AppRegistry, ScrollView, Image, Text, View, Button, Alert, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Handler } from './DataHandler';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

var nativeObj = NativeModules.NativeHandler;
var handler = Handler

export default class PostView extends Component {

  static navigationOptions = ({navigation}) => ({
  	// 展示数据 "`" 不是单引号 
    title: `films list`,
    
  });

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('aaaaaa')
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      });
  }

  constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      data: [],
      loaded: false,
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  clickItem(item, index) {
    // alert(handler.handle())
    if (nativeObj) {
      nativeObj.test(item.item.title);
    }
    console.log(this.props.navigation)
    this.props.navigation.push('Profile', {filmName:item.item.title});
  }

  renderMovie(item) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={this.clickItem.bind(this,item,item.index)}>>
        <View style={styles.container}>
          <Image
            source={{uri: item.item.posters.thumbnail ? item.item.posters.thumbnail : '' }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.item.title}</Text>
            <Text style={styles.year}>{item.item.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

   _extraUniqueKey(item ,index){
    return "index"+index+item;
  }

  render() {
      if (!this.state.loaded) {
        return this.renderLoadingView()
      } 
      return (
      <FlatList 
        keyExtractor = {this._extraUniqueKey.bind(this)}
        data = {this.state.data}
        renderItem = {this.renderMovie.bind(this)}
        style = {styles.list}
        />
      );
  }
}