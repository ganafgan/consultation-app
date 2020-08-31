import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Other = ({photo, text, date}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.img} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 20,
        flexDirection: 'row'
    },
    img: {
        width: 30, 
        height: 30,
        borderRadius: 30/2,
        marginRight: 12
    },
    chatContent: {
        padding: 12,
        paddingRight: 18, 
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    }
})
