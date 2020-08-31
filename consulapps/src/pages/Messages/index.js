import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { List } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Messages = ({navigation}) => {

    const [user, setUser] = useState({})
    const [historyChat, setHistoryChat] = useState([])
    console.log(user)
    console.log(historyChat)

    useEffect(()=>{
    getDataFromLocal()
    const rootDB = Fire.database().ref()
    const urlHistory = `messages/${user.uid}/`
    const messagesDB = rootDB.child(urlHistory)
    messagesDB.on('value', async snapshot => {
            if(snapshot.val()){
                const oldData = snapshot.val()
                const data = []

                    const promises = await Object.keys(oldData).map(async key=>{
                    const urlUidDoctor = `doctors/${oldData[key].uidPartner}`
                    const detailDcotor = await rootDB.child(urlUidDoctor).once('value')
                    data.push({
                        id: key,
                        detailDcotor: detailDcotor.val(),
                        ...oldData[key],
                    })
                })
                await Promise.all(promises)
                console.log(`isi promise`, promises)
                console.log(`ini isi datanya`,data)
                setHistoryChat(data)
               
            }
        })
    },[user.uid])

    const getDataFromLocal = () => {
        getData('user')
        .then((res)=>{
            setUser(res)
        })
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#1280fe', '#00d4ff']} style={styles.wrapperProfile}>
                <Text style={styles.title}>Messages</Text>
            </LinearGradient>
           {
               historyChat.map((chat)=>{
                   const dataDoctor = {
                       id: chat.detailDcotor.uid,
                       data: chat.detailDcotor
                   }
                   return (
                       <List
                            key={chat.id}
                            profile={{uri: chat.detailDcotor.photo}}
                            name={chat.detailDcotor.fullName}
                            desc={chat.lastContentChat}
                            onPress={() => navigation.navigate('Chatting', dataDoctor)}
                       />
                   )
               })
           }
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
