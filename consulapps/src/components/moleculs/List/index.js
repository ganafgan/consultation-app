import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { IcNext, IcAddProfile, IcLanguage, IcRate, IcHelp } from '../../../assets'

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if(icon === 'edit-profile'){
            return <IcAddProfile />
        }
        if(icon === 'language'){
            return <IcLanguage />
        }
        if(icon === 'rate'){
            return <IcRate />
        }
        if(icon === 'help'){
            return <IcHelp />
        }
        return <IcAddProfile />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon/> : <Image source={profile} style={styles.img} /> }
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IcNext/>}
        </TouchableOpacity>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    img: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        marginRight: 10
    },
    content: {
        flex: 1,
        marginLeft: 15
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
})
