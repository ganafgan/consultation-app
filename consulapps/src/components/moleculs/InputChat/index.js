import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Tulis pesan untuk Wulandari'/>
            <Button type='btn-icon-send'/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row'
    },
    input: {
        padding: 14,
        borderRadius: 10,
        backgroundColor: colors.disable,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45
    }
})
