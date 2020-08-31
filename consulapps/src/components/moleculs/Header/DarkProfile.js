import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({onPress, title, desc, photo}) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon='back-light' onPress={onPress} />
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <Image source={photo} style={styles.img} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 45/2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        marginTop: 5,
        textAlign: 'center',
        color: colors.white
    }

})
