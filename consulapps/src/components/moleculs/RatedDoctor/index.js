import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({onPress, name, desc, img}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={img} style={styles.img} />
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStar />
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:15,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 10
    },
    rate: {
        flexDirection: 'row'
    },

    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2
    },
    profile: {
        flex: 1
    }
})
