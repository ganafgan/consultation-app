import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { IcSendDark, IcSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable, onPress}) => {
    if(disable){
        return(
        <View style={styles.container(disable)}>
            <IcSendDark/>
        </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
            <IcSendLight/>
        </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.primary,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft: 8
    })
})
