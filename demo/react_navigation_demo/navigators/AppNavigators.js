import React from 'react';
import {createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Page5 from '../pages/Page5'
import HomePage from '../pages/HomePage'
import {Button, Platform, ScrollView} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DynamicTabNavigator from "./DynamicTabNavigator";

export const DrawerNav = createDrawerNavigator({
        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons name="drafts" size={24} style={{color: tintColor}}/>
                ),
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor}) => (
                    <MaterialIcons
                        name="move-to-inbox"
                        size={24}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
    },
    {
        initialRouteName: 'Page4',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        contentComponent: (props) => (
            <ScrollView style={{backgroundColor: '#987656', flex: 1}}>
                <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
                    <DrawerItems {...props} />
                </SafeAreaView>
            </ScrollView>
        )
    }
);
export const MaterialTopTabNavigator = createMaterialTopTabNavigator({//在这里配置页面的路由
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'Page10',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'Page4',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'Page3',
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
    },
    {
        tabBarOptions: {
            tabStyle: {
                minWidth: 50
            },
            upperCaseLabel: false,//是否使标签大写，默认为true
            scrollEnabled: true,//是否支持 选项卡滚动，默认false
            // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
            // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: {
                backgroundColor: '#678',//TabBar 的背景颜色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white',
            },//标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 6,
            },//文字的样式
        },
    }
);
export const BottomTabNavigator = createBottomTabNavigator({//在这里配置页面的路由
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: 'Page10',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-home'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-people'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'ios-chatboxes'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    }
});
export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`//动态设置navigationOptions
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is Page2.",
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {//在这里定义每个页面的导航属性，动态配置
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                    />
                ),
            }
        }
    },
    TabNav: {
        screen: DynamicTabNavigator,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is TabNavigator.",
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }, DrawerNav: {
        screen: DrawerNav,
        navigationOptions: {//在这里定义每个页面的导航属性，静态配置
            title: "This is DrawerNavigator.",
        }
    }
}, {
    navigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});
