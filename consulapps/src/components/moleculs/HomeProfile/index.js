import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser } from '../../../assets'
import { fonts, colors } from '../../../utils'

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.img} />
            <View>
                <Text style={styles.name}>Lestari</Text>
                <Text style={styles.profession}>Traveller and Blogger</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        marginRight: 10
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.white
    },
    profession: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.white
    }
})
