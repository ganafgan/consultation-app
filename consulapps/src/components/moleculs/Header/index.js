import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcArrowBack } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const Header = () => {
    return (
        <View style={styles.container}>
            <IcArrowBack />
            <Text style={styles.text}>Header</Text>
            <Gap width={24} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.black
    }
})
