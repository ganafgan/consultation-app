import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title, size, color, under, onPress, align}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.link(size, color, under, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    link: (size, color, under, align) => ({
        fontSize: size,
        fontFamily: fonts.primary[600],
        textDecorationLine: under === 'blue' ? 'none' : 'underline' ,
        color: color === 'blue' ? colors.primary : colors.text.secondary,
        textAlign: align
    })
})
