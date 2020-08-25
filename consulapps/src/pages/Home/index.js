import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DmyDoctor1, DmyDoctor2, DmyDoctor3 } from '../../assets';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData, showError } from '../../utils';

const Home = (props) => {

    const [news, setNews] = useState([])
    const [categoryDoctor, setCategoryDoctor] = useState([])

    useEffect(()=>{
        getDoctorCategory()
        getNews()
        getData('user')
        .then((res)=>{
            console.log(res)
        })
    },[])

    const getDoctorCategory = () => {
        Fire.database()
        .ref(`category_doctor/`)
        .once('value')
        .then((res)=>{
            if(res.val()){
                setCategoryDoctor(res.val())
            }
        })
        .catch((err)=>{
            showError(err.message)
        })
    }
    const getNews = () => {
        Fire.database()
        .ref(`news/`)
        .once('value')
        .then((res)=>{
            if(res.val()){
                setNews(res.val())
            }
        })
        .catch((err)=>{
            showError(err.message)
        })
    }

    const renderDoctorCategory = () => {
        return categoryDoctor.map((val)=>{
            return <DoctorCategory 
                key={val.id}
                category={val.category}
                onPress={() => props.navigation.navigate('ChooseDoctor')}
            />
        })
    }

    const renderNewsItem = () => {
       return news.map((val)=>{
           return <NewsItem 
            key={val.id}
            title={val.title}
            date={val.date}
            image={{uri: val.image}}
           />
       })
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Gap height={30} />
                <HomeProfile onPress={() => props.navigation.navigate('UserProfile')} />
                <Gap height={30}/>
            </LinearGradient>
                <Gap height={15} />
                <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini ?</Text>
                <Gap height={15} />
                <View style={styles.wrapperScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.category}>
                            <Gap width={40} />
                            {renderDoctorCategory()}
                            <Gap width={30} />
                        </View>
                    </ScrollView>
                </View>
                <Gap height={30} />
                <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                <View style={styles.wrapperSection}>
                    <RatedDoctor name='Sri Rahayu' desc='Spesialis Jantung' img={DmyDoctor2} onPress={() => props.navigation.navigate('DoctorProfile')} />
                    <RatedDoctor name='Wulandari' desc='Spesialis Kandungan' img={DmyDoctor1} onPress={() => props.navigation.navigate('DoctorProfile')} />
                    <RatedDoctor name='Sugeng' desc='Spesialis Syaraf' img={DmyDoctor3} onPress={() => props.navigation.navigate('DoctorProfile')} />
                    <Gap height={15} />
                </View>
                <Text style={styles.sectionLabel}>Good News</Text>
                {renderNewsItem()}
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
