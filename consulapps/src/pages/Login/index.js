import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch } from 'react-redux'
import { ILLogin } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData, useForm } from '../../utils'

const Login = (props) => {

    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()

    const onLogin = () => {
        dispatch({type: 'SET_LOADING', value: true})
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then((res)=>{
            dispatch({type: 'SET_LOADING', value: false})
            Fire.database()
                .ref(`users/${res.user.uid}/`)
                .once('value')
                .then((res)=>{
                    console.log(res.val())
                    if(res.val()){
                        storeData('user', res.val())
                        props.navigation.replace('MainApp')
                    }
                    
                })
        })
        .catch((err)=>{
            dispatch({type: 'SET_LOADING', value: false})
            showError(err.message)
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1280fe', '#00d4ff']} style={styles.page}>
                    <Image source={ILLogin} style={styles.img}/>
                    <Gap height={20} />
                </LinearGradient>
                <View style={styles.login}>
                    <Gap height={40} />
                    <Text style={styles.title}>Hai,</Text>
                    <Text style={styles.title}>Selamat datang</Text>
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
                    <Gap height={10} />
                    <Link title='Forget Password' size={12} />
                    <Gap height={50} />
                    <Button title='Sign In' onPress={onLogin}/>
                    <Gap height={20} />
                    <View style={styles.register}>
                        <Text style={{fontFamily: fonts.primary.normal}}>Don't have an account ? </Text>
                        <Link title='Sign Up' 
                            size={14} under='blue' 
                            color='blue'
                            onPress={()=> props.navigation.navigate('Register')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
        
    )
}

export default Login

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
