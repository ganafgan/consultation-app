import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

const NewsDetail = ({route}) => {
    const dataNews = route.params

    return (
        <WebView 
            source={{uri: dataNews.url}}
        />
    )
}

export default NewsDetail

const styles = StyleSheet.create({})
