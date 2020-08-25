import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    label: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    },
    value: {
        fontSize: 14,
        fontFamily: fonts.primary[600],
        color: colors.black
    }
})
