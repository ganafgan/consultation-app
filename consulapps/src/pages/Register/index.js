import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ILRegister } from '../../assets'
import { Button, Gap, Input } from '../../components'
import { colors, fonts } from '../../utils'

const Register = (props) => {
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
                <Input label='Fullname'/>
                <Gap height={20} />
                <Input label='Pekerjaan' />
                <Gap height={20} />
                <Input label='Email' />
                <Gap height={20} />
                <Input label='Password' />
                <Gap height={50} />
                <Button title='Sign Up' onPress={() => props.navigation.navigate('UploadPhoto')}/>
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
