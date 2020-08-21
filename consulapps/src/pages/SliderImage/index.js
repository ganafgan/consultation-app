import React, { useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { colors, fonts } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const slides = [
    {
      id: 1,
      text: 'Health',
      subtext: 'Periodically check your health in our application' ,
      image: require('../../assets/ilustration/health1.png'),
      
    },
    {
      id: 2,
      text: 'Activity',
      subtext: 'Consult what sport is suitable for you',
      image: require('../../assets/ilustration/health2.png'),
    },
    {
      id: 3,
      text: 'Medicine',
      subtext: 'Consult your health problems and get the best prescription from our doctors' ,
      image: require('../../assets/ilustration/health3.png'),
      
    }
  ]

const SliderImage = ({navigation}) => {

    const [showSlide, setShowSlide] = useState(false)

    const renderSlide = ({item}) => {
        return (
            <LinearGradient colors={['#00d4ff','#1280fe']} style={styles.container}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.subtext}>{item.subtext}</Text>
            </LinearGradient>
        )
    }

    const onDone = () => {
        setShowSlide(true)
        navigation.replace('Login')
    }

    if (showSlide) {
        return <SliderImage/>
    } else {
        return <AppIntroSlider
            renderItem={renderSlide}
            data={slides}
            onDone={onDone}   
            showSkipButton={true}
        />
    }
}

export default SliderImage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 300,
        width: 300
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white
    },
    subtext: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    }
})
