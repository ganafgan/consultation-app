import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData, showError, storeData } from '../../utils'

const UpdateProfile = ({navigation}) => {

    useEffect(()=>{
        getData('user')
        .then((res)=>{
            const data = res
            data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto
            const tempPhoto = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto
            setPhoto(tempPhoto)
            setProfile(data)
        })
    },[])

    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [photoForDB, setPhotoForDB] = useState('')
    
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: '',
    })

    const onUpdate = () => {
        //cek apakah ada perubahan pada input password atau tidak
        if(password.length > 0){
            //cek karakter, harus lebih dari 6 karakter
            if(password.length < 6){
                showError('Password kurang dari 6 karakter')
            } else {
                //update password
                updatePassword()
                updateProfileData()
                navigation.replace('MainApp')
            }
        } else {
            updateProfileData()
            navigation.replace('MainApp')
        }
    }

    const updatePassword = () => {
        Fire.auth()
        .onAuthStateChanged((user)=>{
            if(user){
                user.updatePassword(password)
                .catch((err)=>{
                    showError(err.message)
                })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile
        data.photo = photoForDB
        Fire.database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(()=>{
            storeData('user', data)
            .then(()=>{
                navigation.replace('MainApp')
            })
            .catch(()=>{
                showError('Something Error')
            })
        })
        .catch((err)=>{
            showError(err.message)
        })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }

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
                }
        })
    }


    return (
        <View style={styles.container}>
            <Header title='Update Profile' type='dark' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Profile isRemove photo={photo} onPress={getImage} />
                <Gap height={30}/>
                <View style={styles.content}>
                    <Input 
                        label='Full Name' 
                        value={profile.fullName}
                        onChangeText={(value) => changeText('fullName', value)}
                    />
                    <Gap height={24} />
                    <Input 
                        label='Pekerjaan'
                        value={profile.profession}
                        onChangeText={(value) => changeText('profession', value)} 
                    />
                    <Gap height={24} />
                    <Input 
                        label='Email'
                        value={profile.email} 
                        disable
                    />
                    <Gap height={24} />
                    <Input 
                        label='Password' 
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry
                    />
                    <Gap height={40} />
                    <Button title='Save Profile' onPress={onUpdate} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
