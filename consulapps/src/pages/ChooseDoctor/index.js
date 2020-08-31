import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, List } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation, route}) => {

    const itemCategory = route.params
    const [listDoctors, setListDoctors] = useState([])

    useEffect(()=>{
        getDoctorBycategory(itemCategory.category)
    },[itemCategory.category])

    const getDoctorBycategory = (category) => {
        Fire.database()
        .ref(`doctors/`)
        .orderByChild(`category`)
        .equalTo(category)
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
                setListDoctors(data)
            }
        })
        .catch((err)=>{
            showError(err.message)
        })
        
    }

    const renderListDoctors = () => {
        return listDoctors.map((val)=>{
            return <List 
                key={val.id}
                name={val.data.fullName}
                desc={val.data.gender}
                profile={{uri: val.data.photo}}
                type='next'
                onPress={() => navigation.navigate('DoctorProfile', val)}
            />
        })

    }

    return (
        <View style={styles.container}>
            <Header title={`Pilih ${itemCategory.category}`} type='dark' onPress={()=> navigation.goBack()} />
             {renderListDoctors()}
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
