import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { showMessage } from "react-native-flash-message"
import LinearGradient from 'react-native-linear-gradient'
import { ILRegister } from '../../assets'
import { Button, Gap, Input, Loading } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, useForm, storeData, showSuccess, showError } from '../../utils'
import { useDispatch } from 'react-redux'

const Register = (props) => {

    //state loading
    const dispatch = useDispatch()

    //custom useState
    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: ''
    })

    //fungsi Button click
    const onContinue = () => {
        if(form.fullName && form.profession && form.email && form.password){
            dispatch({type: 'SET_LOADING', value: true})
            //membuat user menggunakan email dan password
            Fire.auth()
                .createUserWithEmailAndPassword(form.email, form.password)
                .then((res)=>{
                    dispatch({type: 'SET_LOADING', value: false})
                    showSuccess('Register Success')
                    setForm('reset')
                    const data = {
                        fullName: form.fullName,
                        profession: form.profession,
                        email: form.email,
                        uid: res.user.uid
                    }
                    Fire
                    .database()
                    .ref(`users/${res.user.uid}/`)
                    .set(data)
                    storeData('user', data)
                    props.navigation.navigate('UploadPhoto', data)
                })
                .catch((error) => {
                // Handle Errors here.
                dispatch({type: 'SET_LOADING', value: false})
                const errorMessage = error.message;
                showError(errorMessage)
                // ...
              });

        }else {
            showError('Form Must Be Filled')
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1280fe', '#00d4ff']} style={styles.page}>
                <Image source={ILRegister} style={styles.img}/>
                <Gap height={20} />
            </LinearGradient>
            <View style={styles.login}>
                <Gap height={40} />
                <Text style={styles.title}>Ayo,</Text>
                <Text style={styles.title}>Mulai konsultasi</Text>
                <Gap height={20} />
                <Input 
                    label='Fullname' 
                    value={form.fullName} 
                    onChangeText={(value) => setForm('fullName', value)}
                />
                <Gap height={20} />
                <Input 
                    label='Pekerjaan' 
                    value={form.profession} 
                    onChangeText={(value) => setForm('profession', value)} 
                />
                <Gap height={20} />
                <Input 
                    label='Email' 
                    value={form.email} 
                    onChangeText={(value) => setForm('email', value)} 
                />
                <Gap height={20} />
                <Input 
                    label='Password' 
                    value={form.password} 
                    onChangeText={(value) => setForm('password', value)} 
                    secureTextEntry
                />
                <Gap height={50} />
                <Button title='Continue' onPress={onContinue}/>
                <Gap height={50} />
            </View>
        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    page: {
        alignItems: 'center',
        paddingBottom: 60
    },
    title: {
        fontSize: 20,
        color: colors.black,
        fontFamily: fonts.primary[600],
       
    },
    img: {
        height: 200,
        width: 300
    },
    login: {
        flex: 1,
        paddingHorizontal: 40,
        backgroundColor: colors.white,
        marginTop: -50,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    register: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
