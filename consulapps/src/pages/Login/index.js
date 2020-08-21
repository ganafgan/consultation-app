import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILLogin } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import LinearGradient from 'react-native-linear-gradient';

const Login = (props) => {
    return (
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1280fe', '#00d4ff']} style={styles.page}>
                <Image source={ILLogin} style={styles.img}/>
                <Gap height={20} />
            </LinearGradient>
            <View style={styles.login}>
                <Gap height={40} />
                <Text style={styles.title}>Hai,</Text>
                <Text style={styles.title}>Selamat datang</Text>
                <Gap height={20} />
                <Input label='Email' placeholder='Input Email' />
                <Gap height={20} />
                <Input label='Password' />
                <Gap height={10} />
                <Link title='Forget Password' size={12} />
                <Gap height={50} />
                <Button title='Sign In' onPress={() => props.navigation.navigate('MainApp')}/>
                <Gap height={20} />
                <View style={styles.register}>
                    <Text style={{fontFamily: fonts.primary[600]}}>Don't have an account ? </Text>
                    <Link title='Sign Up' 
                        size={14} under='blue' 
                        color='blue'
                        onPress={()=> props.navigation.navigate('Register')}
                    />
                </View>
            </View>
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
