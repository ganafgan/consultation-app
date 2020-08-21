import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../components'
import { ILNullPhoto, IcAddPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.imgWrapper}>
                        <Image source={ILNullPhoto} style={styles.img} />
                        <IcAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Lestari</Text>
                    <Text style={styles.profession}>Traveller and Blogger</Text>
                </View>
                <View>
                    <Button title='Upload and Continue' />
                    <Gap height={30} />
                    <Link title='Skip for this' align='center' size={16} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 60
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 110,
        height: 110
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.black,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.text.secondary
    }
})
