import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gap, Header, List, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, showError } from '../../utils'

const UserProfile = ({navigation, route}) => {

    const profile = route.params
   
    const onLogout = () => {
        Fire.auth()
        .signOut()
        .then(()=>{
            navigation.replace('Login')
        })
        .catch((err)=>{
            showError(err.message)
        })
    }
    
    return (
        <View style={styles.container}>
            <Header title='Profile' type='dark' onPress={() => navigation.goBack()} />
            <Gap height={20} />
            {profile.fullName.length > 0 && (
                <Profile 
                    name={profile.fullName} 
                    desc={profile.profession}
                    photo={profile.photo}
                />
            )}
            <Gap height={15} />
            <List 
                name='Edit Profile' 
                desc='Last Update Yesterday' 
                type='next' icon='edit-profile' 
                onPress={() => navigation.navigate('UpdateProfile')}
             />
            <List 
                name='Edit Profile' 
                desc='Last Update Yesterday' 
                type='next' 
                icon='language' 
            />
            <List 
                name='Edit Profile' 
                desc='Last Update Yesterday' 
                type='next' 
                icon='rate' />
            <List 
                name='Sign Out' 
                desc='Last Update Yesterday' 
                type='next' 
                icon='help' 
                onPress={onLogout}
            />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
