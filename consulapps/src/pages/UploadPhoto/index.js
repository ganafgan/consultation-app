import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { IcAddPhoto, IcRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData } from '../../utils'

const UploadPhoto = ({navigation, route}) => {

    const {fullName, profession, uid} = route.params
    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')

    const getImage = () => {
        const options = {
            title: 'Select Avatar',
            quality: 0.5,
            maxwidth: 200,
            maxHeight: 200,
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            }
          };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response =', response)
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } if (response.didCancel || response.error){
                   showError('Oops, sepertinya anda belum memilih photo nya ?')
                }else{
                    const source = { uri: response.uri}
                    setPhotoForDB (`data:${response.type};base64, ${response.data}`)
                    setPhoto(source)
                    setHasPhoto(true)
                }
        })
    }

    const UploadAndContinue = () => {
        Fire.database()
        .ref(`users/${uid}/`)
        .update({photo: photoForDB})
        const data = route.params
        data.photo = photoForDB
        storeData('user', data)
        navigation.replace('MainApp')
    }

    return (
        <View style={styles.container}>
            <Header title='Upload Photo' type='dark' onPress={()=> navigation.goBack()}/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.imgWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.img} />
                        {hasPhoto && <IcRemovePhoto style={styles.addPhoto} /> }
                        {!hasPhoto && <IcAddPhoto style={styles.addPhoto} /> }
                    </TouchableOpacity>
                        <Text style={styles.name}>{fullName}</Text>
                        <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title='Upload and Continue' onPress={UploadAndContinue} />
                    <Gap height={30} />
                    <Link title='Skip for this' align='center' size={16}  onPress={() => props.navigation.replace('MainApp')}/>
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
        height: 110,
        borderRadius: 110/2
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
