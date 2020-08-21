import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILLogo } from '../../assets'
import { Gap } from '../../components'


const Splash = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.replace('SliderImage')
        }, 2000)
    },[])

    return (
        <View style={styles.container}>
            <Image source={ILLogo} style={styles.img} />
            <Gap height={10} />
            <Text style={styles.title}>Medicall</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 100,
        width: 100
    },
    title: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: fonts.primary[700]
    }
})
