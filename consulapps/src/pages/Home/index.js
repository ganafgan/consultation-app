import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts } from '../../utils'
import LinearGradient from 'react-native-linear-gradient';
import {JsonCategoryDoctor} from '../../assets'

const Home = (props) => {

    const renderCategory = () => {
        return JsonCategoryDoctor.data.map((val)=>{
            return <DoctorCategory 
                key={val.id}
                category={val.category}
                onPress={()=> props.navigation.navigate('ChooseDoctor')}
            />
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Gap height={30} />
                <HomeProfile />
                <Gap height={30}/>
            </LinearGradient>
                <Gap height={15} />
                <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini ?</Text>
                <Gap height={15} />
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={40} />
                            {renderCategory()}
                            <Gap width={30} />
                        </View>
                    </ScrollView>
                </View>
                <Gap height={30} />
                <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                <View style={styles.wrapperSection}>
                    <RatedDoctor />
                    <RatedDoctor />
                    <RatedDoctor />
                    <Gap height={15} />
                </View>
                <Text style={styles.sectionLabel}>Good News</Text>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    wrapperProfile: {
        paddingHorizontal: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20

    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        maxWidth: 250,
        paddingHorizontal: 20
    },
    category: {
        flexDirection: 'row'
    },
   wrapperScroll: {
       marginHorizontal: -20
   },
   wrapperSection: {
       paddingHorizontal: 20
   },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black,
        marginBottom: 15,
        paddingHorizontal: 20
    }
})
