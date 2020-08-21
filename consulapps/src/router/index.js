import React from 'react';
import { Login, Register, SliderImage, Splash, UploadPhoto, Home, Messages, Hospitals, ChooseDoctor } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Messages' component={Messages} />
            <Tab.Screen name='Hospitals' component={Hospitals} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='MainApp' >
            <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}} />
            <Stack.Screen name='SliderImage' component={SliderImage} options={{headerShown: false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}  />
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            <Stack.Screen name='UploadPhoto' component={UploadPhoto} options={{headerShown: false}} />
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name='ChooseDoctor' component={ChooseDoctor} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router

