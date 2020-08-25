import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, fonts } from '../../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';


const Button = ({title, type, onPress, icon, disable}) => {
    if(type === 'btn-icon-send'){
        return <BtnIconSend disable={disable} />
    }
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress} />
    }
    if(disable){
       return (
        <View style={styles.disableButton} >
            <Text style={styles.titleDisable}>{title}</Text>
        </View>
       )
    }
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
    }),
    disableButton: {
        backgroundColor: colors.button.disable.background,
        padding: 15,
        borderRadius: 10,
    },
    titleDisable: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.button.disable.text
    }
})
