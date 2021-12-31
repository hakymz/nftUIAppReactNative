import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: COLORS.white,
        borderTopWidth: 0.3,
        borderColor: COLORS.grey,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const TabBarIcon = options.tabBarIcon;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.name)}
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TabBarIcon
              size={30}
              color={isFocused ? COLORS.black : COLORS.grey}
              focused={isFocused}
            />
            {isFocused && (
              <View
                style={{
                  height: 6,
                  width: 30,
                  backgroundColor: COLORS.black,
                  position: 'absolute',
                  top: -20,
                  borderBottomLeftRadius: 6,
                  borderBottomRightRadius: 6,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'bell' : 'bell-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
