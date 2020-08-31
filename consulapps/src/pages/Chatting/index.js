import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors, getData, showError, getChatTime, setDateChat } from '../../utils'
import { Fire } from '../../config'

const Chatting = ({navigation, route}) => {

    const dataDoctor = route.params
    const [chatContent, setChatContent] = useState('')
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])

    useEffect(()=>{
        getDataUserfromLocal()
        const chatID = `${user.uid}_${dataDoctor.data.uid}`
        const urlFirebase = `chatting/${chatID}/allChat/`
        Fire.database()
        .ref(urlFirebase)
        //pengambilan database secara realtime
        .on('value', (snapshot)=>{
            //parsing bentuk data firebase menjadi array
            if(snapshot.val()){
                const dataSnapshot = snapshot.val()
                const allDataChat = []

                Object.keys(dataSnapshot).map((key)=>{
                    const dataChat = dataSnapshot[key]
                    const newDataChat = []
                    Object.keys(dataChat).map((itemChat)=>{
                        newDataChat.push({
                            id: itemChat,
                            data: dataChat[itemChat]
                        })
                    })

                    allDataChat.push({
                        id: key,
                        data: newDataChat
                    })
                })
                setChatData(allDataChat)
            }
        })
    },[dataDoctor.data.uid, user.uid])

    const getDataUserfromLocal = () =>{
        getData('user')
        .then((res)=>{
            setUser(res)
        })
    }
   
    const chatSend = () => {
        const today = new Date()
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today) ,
            chatContent: chatContent
        }
        const chatID = `${user.uid}_${dataDoctor.data.uid}`
        const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`
        const urlMessagesUser = `messages/${user.uid}/${chatID}`
        const urlMessagesDoctor = `messages/${dataDoctor.data.uid}/${chatID}`
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: dataDoctor.data.uid
        }
        const dataHistoryChatForDoctor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid
        }
        //kirim ke Firebase
        Fire.database()
        .ref(urlFirebase)
        .push(data)
        .then(()=>{
            setChatContent('')
            //set history for user
            Fire.database()
            .ref(urlMessagesUser)
            .set(dataHistoryChatForUser)

            //set history forDoctor
            Fire.database()
            .ref(urlMessagesDoctor)
            .set(dataHistoryChatForDoctor)
        })
        .catch((err)=>{
            showError(err.message)
        })

    }

    const renderChatData = () => {
        return chatData.map((val)=>{
            return(
                <View key={val.id}>
                    <Text style={styles.chatDate}>{val.id}</Text>
                    {val.data.map((item)=>{
                        const isMe = item.data.sendBy === user.uid
                        return <ChatItem 
                        key={item.id}
                        isMe={isMe}
                        text={item.data.chatContent}
                        date={item.data.chatTime}
                        photo={isMe ? null : {uri: dataDoctor.data.photo}}
                        />
                    })}
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            <Header 
                title={dataDoctor.data.fullName} 
                type='dark-profile' 
                desc={dataDoctor.data.category}
                photo={{uri: dataDoctor.data.photo}}
                onPress={() => navigation.goBack()} 
            />
            <View style={styles.content}>
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                    ref={scroll => {
                        this.scroll = scroll
                    }}
                    onContentSizeChange={() => this.scroll.scrollToEnd()}
                    >
                        {renderChatData()}
                    </ScrollView>
                </View>
            <InputChat
                value={chatContent}
                onChangeText={(value) => setChatContent(value)}
                onButtonPress={chatSend}
                targetChat={dataDoctor}
             />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})
