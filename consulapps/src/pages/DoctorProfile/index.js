import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = (props) => {
    return (
        <View style={styles.container}>
            <Header title='Doctor Profile' type='dark' onPress={() => props.navigation.goBack()} />
            <Profile name='Wulandari' desc='Spesialis Kandungan' />
            <Gap height={10} />
            <ProfileItem label='Alumnus' value='Universitas Indonesia 2019' />
            <ProfileItem label='Tempat Praktik' value='Rumah Sakit Advent Bandung' />
            <ProfileItem label='No. STR' value='000077665566556' />
            <Gap height={25} />
            <View style={styles.buttonWrapper}>
                <Button title='Start Concultation' onPress={() => props.navigation.navigate('Chatting')} />
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    buttonWrapper: {
        paddingHorizontal: 40,
        paddingTop: 25
    }
})
