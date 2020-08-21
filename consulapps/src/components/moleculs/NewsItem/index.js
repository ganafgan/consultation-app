import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DmyNews1 } from '../../../assets'
import { fonts, colors } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>It is safe to stay at home during coronavirus ?</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={DmyNews1} style={styles.img} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 15,
        paddingHorizontal: 20
    },
    titleWrapper: {
        flex: 1,

    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black,
        maxWidth: '90%'
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 5
    },
    img: {
        width: 80,
        height: 60,
        borderRadius: 10
    }
})
