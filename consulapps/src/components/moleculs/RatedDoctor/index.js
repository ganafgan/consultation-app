import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DmyDoctor1, IcStar } from '../../../assets'
import { fonts, colors } from '../../../utils'

const RatedDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DmyDoctor1} style={styles.img} />
            <View style={styles.profile}>
                <Text style={styles.name}>Wulandari</Text>
                <Text style={styles.category}>Spesilis Kandungan</Text>
            </View>
            <View style={styles.rate}>
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStar />
            </View>
        </View>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:15
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50/2
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
