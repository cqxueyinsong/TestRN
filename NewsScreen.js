import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import handler from './DataHandler'

export default class NewsScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        // 展示数据 "`" 不是单引号 
      title: `${navigation.state.params.filmName}`,
      
    });
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props))
        console.log("aaaaaaaaa")
      }

    clickItem () {
        if (handler) {
            alert(handler.handle())
        } else {
            this.props.navigation.push('Profile', {filmName:"1"});
        }
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.clickItem.bind(this)}>>
            <Text>NewsScreen</Text>
            </TouchableOpacity>
        )
    }
}