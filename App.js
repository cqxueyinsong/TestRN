import React, {Component} from "react";
// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import PostView from "./HomeScreen";  // 从HomeScreen页面导入HomeScreen组件，HomeScreen其实是表示HomeScreen.js。./表示当前页面，不可删除
import NewsScreen from "./NewsScreen"; // 从NewsScreen页面导入NewsScreen组件
import MyScreen from "./MyScreen"; // 从MyScreen页面导入MyScreen组件
export default class MainComponent extends Component {
    render() {
        console.log("开始启动开始启动开始启动开始启动开始启动开始启动开始启动开始启动开始启动开始启动开始启动开始启动")
        return (
            <Navigator/>
        );
    }
}
const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: PostView,  // 对应的路由页面
        navigationOptions: ({navigation}) => ({
            // tabBarLabel: '首页',
            title: '首页',
        }),
    },
    News: {
        screen: NewsScreen,
        navigationOptions: {  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '新闻',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
        },
    }
    ,
    My: {
        screen: MyScreen,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '我的',
        },
    }
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarTop, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {} // 在属性TabBarBottom与TabBarTop中有所不同
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Tab',
    navigationOptions: {
        title: 'Welcome to learn React Native!',
        headerStyle: {backgroundColor: '#5da8ff'},  // 设置导航头部样式
        headerTitleStyle: {color: '#333333'},  // 设置导航头部标题样式
    }
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator({
    Main: {screen: PostView,title:"first"},
    Profile: {screen: NewsScreen,title :"second"},
  },{
	initialRouteName: 'Main', // 默认显示界面
	//   导航栏相关设置项
    header:{
    	    //导航栏可见
            visible : false,
            //左上角的返回键文字, 默认是上一个页面的title
            backTitle : "返回",
            //导航栏的style
            headerStyle: {
                backgroundColor: '#000'
            },
            //导航栏的title的style
            titleStyle: {
                color: 'green'
            }
    },
    title : '',
    //导航栏的style
     headerStyle: {
                backgroundColor: '#000'
     },
            //导航栏的title的style
     headerTitleStyle: {
             color: 'blue',
             //居中显示
             alignSelf : 'center',
         },

    //是否允许右滑返回，在iOS上默认为true，在Android上默认为false
    cardStack: {
            gesturesEnabled: true,
    },
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
});
// const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);