import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IcHomeActive, IcHomeInactive, IcHospitalsActive, IcHospitalsInactive, IcMessagesActive, IcMessagesInactive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <IcHomeActive /> : <IcHomeInactive />
        }
        if (title === 'Messages') {
            return active ? <IcMessagesActive /> : <IcMessagesInactive />
        }
        if (title === 'Hospitals') {
            return active ? <IcHospitalsActive /> : <IcHospitalsInactive />
        }
        return <IcHomeActive />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontSize: 12,
        fontFamily: fonts.primary[700],
        marginTop: 5,
    })
})
