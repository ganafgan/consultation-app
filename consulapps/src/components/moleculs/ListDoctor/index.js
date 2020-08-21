import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile, name, desc}) => {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.img} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center'

    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        marginRight: 10
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary
    }
})
