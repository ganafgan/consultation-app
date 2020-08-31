import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ProfileItem, Button, Gap } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {

    const dataDoctor = route.params

    return (
        <View style={styles.container}>
            <Header title='Doctor Profile' type='dark' onPress={() => navigation.goBack()} />
            <Profile 
                name={dataDoctor.data.fullName} 
                desc={dataDoctor.data.profession} 
                photo={{uri: dataDoctor.data.photo}}
            />
            <Gap height={10} />
            <ProfileItem label='Alumnus' value={dataDoctor.data.university} />
            <ProfileItem label='Tempat Praktik' value={dataDoctor.data.hospital_address} />
            <ProfileItem label='No. STR' value={dataDoctor.data.str_number} />
            <Gap height={25} />
            <View style={styles.buttonWrapper}>
                <Button title='Start Concultation' onPress={() => navigation.navigate('Chatting', dataDoctor)} />
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
