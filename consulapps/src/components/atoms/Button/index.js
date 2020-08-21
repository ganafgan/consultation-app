import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import LinearGradient from 'react-native-linear-gradient';


const Button = ({title, type, onPress}) => {
    return (
        <TouchableOpacity  onPress={onPress}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1280fe', '#00d4ff']} style={styles.container(type)} >
                <Text style={styles.title(type)}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: type => ({
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    }),
    title: type => ({
        fontSize: 16,
        color: type === 'secondary' ? colors.black : colors.white,
        fontFamily: fonts.primary[600]
    })
})
