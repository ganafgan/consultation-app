import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DummyUser, IcRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, isRemove, photo, onPress}) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.img} />
                    {isRemove &&  <IcRemovePhoto style={styles.removePhoto} />}
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    <Image source={photo} style={styles.img} />
                    {isRemove &&  <IcRemovePhoto style={styles.removePhoto} />}
                </TouchableOpacity>
            )}
            {name && (
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.profession}>{desc}</Text>
                    </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 110, 
        height: 110,
        borderRadius: 110/2
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130/2,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginTop: 10,
        textAlign: 'center'
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    },
    removePhoto: {
        position: 'absolute',
        right: 8,
        bottom: 8
    }
})
