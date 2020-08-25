import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DmyDoctor1, DmyDoctor2, DmyDoctor3 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = (props) => {
    return (
        <View style={styles.container}>
            <Header title='Pilih Dokter Anak' type='dark' onPress={()=> props.navigation.goBack()} />
            <List profile={DmyDoctor1} name='Wulandari' desc='Wanita' type='next' onPress={() => props.navigation.navigate('Chatting')} />
            <List profile={DmyDoctor2} name='Wulandari' desc='Wanita' type='next' />
            <List profile={DmyDoctor3} name='Wulandari' desc='Wanita' type='next' />
            <List profile={DmyDoctor2} name='Wulandari' desc='Wanita' type='next' />
            <List profile={DmyDoctor1} name='Wulandari' desc='Wanita' type='next' />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    }
})
