import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospital = ({type, name, address, img}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img} />
            <View>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    img: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.black
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 5
    }
})
