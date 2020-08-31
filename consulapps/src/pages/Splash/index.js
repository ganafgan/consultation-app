import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILLogo } from '../../assets'
import { Gap } from '../../components'
import { Fire } from '../../config'


const Splash = ({navigation}) => {

    useEffect(()=>{
            const unsubscribe =  Fire.auth().onAuthStateChanged((user)=>{
                setTimeout(()=>{
                    if(user){
                        navigation.replace('MainApp')
                    } else {
                        navigation.replace('Login')
                    }
                }, 2000)
            })
            return () => unsubscribe()
    },[navigation])

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
