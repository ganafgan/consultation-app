import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const HomeProfile = ({onPress, profile}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.img} />
            <View>
                <Text style={styles.name}>Hai, {profile.fullName}</Text>
            <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
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
        color: colors.white,
        textTransform: 'capitalize'
    },
    profession: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.white,
        textTransform: 'capitalize'
    }
})
