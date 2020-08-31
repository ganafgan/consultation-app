import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ILNullPhoto } from '../../assets';
import { DoctorCategory, Gap, HomeProfile, NewsItem, RatedDoctor, Loading } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData, showError } from '../../utils';
import { useDispatch } from 'react-redux';
import Axios from 'axios'
import moment from 'moment';

const Home = ({navigation}) => {
    //state loading
    const dispatch = useDispatch()

    //kumpulan hooks
    const [news, setNews] = useState([])
    const [categoryDoctor, setCategoryDoctor] = useState([])
    const [doctors, setDoctors] = useState([])
    const [profile, setProfile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: ''
    })
   
    useEffect(()=>{
        getDoctorCategory()
        getTopRatedDoctors()
        getNews()
        navigation.addListener('focus', ()=>{
            getUserData()
        })
    },[navigation])

    const getUserData = () => {
        getData('user')
        .then((res)=>{
            const data = res
            data.photo = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto
            setProfile(res)
        })
    }

    const getTopRatedDoctors = () => {
        Fire.database()
        .ref(`doctors/`)
        .orderByChild('rate')
        .limitToLast(3)
        .once('value')
        .then((res)=>{
            if(res.val()){
                const oldData = res.val()
                const data = []
                Object.keys(oldData).map((key)=>{
                data.push({
                    id: key,
                    data: oldData[key]
                    })
                })
                setDoctors(data)
            }
        })
        .catch((err)=>{
            showError(err.message)
        })
    }

    const getDoctorCategory = () => {
        Fire.database()
        .ref(`category_doctor/`)
        .once('value')
        .then((res)=>{
            if(res.val()){
                const data = res.val()
                const filterData = data.filter((el)=>(el !== null))
                setCategoryDoctor(filterData)
            }
        })
        .catch((err)=>{
            showError(err.message)
        })
    }
    const getNews = () => {
        const key = `ae88de4fa148465f8f3d91c0ad3a77bd`
       Axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=${key}`)
       .then((res)=>{
           console.log('isi berita',res)
           setNews(res.data.articles)
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
                onPress={() => navigation.navigate('ChooseDoctor', val)}
            />
        })
    }

    const renderTopRatedDoctors = () => {
        return doctors.map((val)=>{
            return <RatedDoctor 
                key={val.id}
                name={val.data.fullName}
                desc={val.data.profession}
                img={{uri: val.data.photo}}
                onPress={()=> navigation.navigate('DoctorProfile', val)}
            />
        })
    }

    const renderNewsItem = () => {
        let dataFiltered = news.slice(14,19)
        return dataFiltered.map((val, index)=>{
          return <NewsItem 
            key={index}
            image={{uri: val.urlToImage}}
            title={val.title.length > 70 ? val.title.slice(0,50) + `...` : val.title }
            date={moment().startOf('day').fromNow(val.publishedAtmomen)}
            onPress={() => navigation.navigate('NewsDetail', val)}
          />
      })
    }

    if(news === []){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Gap height={30} />
                <HomeProfile 
                    profile={profile}
                    onPress={() => navigation.navigate('UserProfile', profile)} 
                />
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
                    {renderTopRatedDoctors()}
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
