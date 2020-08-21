import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import LinearGradient from 'react-native-linear-gradient';
import { DmyDoctor1, DmyDoctor2, DmyDoctor3 } from '../../assets';

const Messages = () => {

    const[doctors, setDoctors] =  useState([
        {
            id: 1,
            profile: DmyDoctor1,
            name: 'Wulandari',
            desc: 'Baik bu, terima kasih banyak atas wakt....'
        },
        {
            id: 2,
            profile: DmyDoctor2,
            name: 'Sugeng Rahayu',
            desc: 'Baik bu, terima kasih banyak atas wakt....'
        },
        {
            id: 3,
            profile: DmyDoctor3,
            name: 'Dewi Sabina',
            desc: 'Baik bu, terima kasih banyak atas wakt....'
        },
    ])

    const renderDoctors = () => {
        return doctors.map((val)=>{
            return <ListDoctor
                key={val.id}
                profile={val.profile}
                name={val.name}
                desc={val.desc}
            />
        })
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Text style={styles.title}>Messages</Text>
            </LinearGradient>
            {renderDoctors()}
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapperProfile: {
        paddingVertical: 30,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginLeft: 20
    }

})
