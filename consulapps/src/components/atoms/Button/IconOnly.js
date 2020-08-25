import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IcArrowBack, IcArrowBackLight } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'back-dark'){
            return <IcArrowBack />
        }
        if(icon === 'back-light'){
            return <IcArrowBackLight/>
        }
        return <IcArrowBack />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
