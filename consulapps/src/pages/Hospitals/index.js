import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Gap, ListHospital } from '../../components';
import { colors, fonts } from '../../utils';
import { ILHospital1, ILHospital2, ILHospital3 } from '../../assets';

const Hospitals = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Text style={styles.title}>Hospital List</Text>
            </LinearGradient>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={10} />
                <ListHospital 
                    type='Rumah Sakit' 
                    name='Dr Hasan Sadikin'
                    address='Jln. Pasteur no.12'
                    img={ILHospital1}
                />
                <ListHospital 
                    type='Rumah Sakit' 
                    name='Hermina Pasteur'
                    address='Jln. Pasteur no.132'
                    img={ILHospital2}
                />
                <ListHospital 
                    type='Rumah Sakit' 
                    name='Santosa Internasional'
                    address='Jln. Kebon Jati no.144'
                    img={ILHospital3}
                />
                <ListHospital 
                    type='Rumah Sakit' 
                    name='Imanuel'
                    address='Jln. Raya Kopo no.110'
                    img={ILHospital1}
                />
                <ListHospital 
                    type='Rumah Sakit' 
                    name='Boromeus'
                    address='Jln. Ir H. Juanda no.12'
                    img={ILHospital1}
                />
                <Gap height={10} />
            </ScrollView>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    wrapperProfile: {
        paddingVertical: 30,
        paddingLeft: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white
    },
    img: {
        height: 150,
        width: 200,
    },
    content: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.white,
    }
})
