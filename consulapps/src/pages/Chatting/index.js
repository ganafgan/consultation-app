import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors } from '../../utils'

const Chatting = (props) => {
    return (
        <View style={styles.container}>
            <Header title='Wulandari' type='dark-profile' onPress={() => props.navigation.goBack()} />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe/>
                <ChatItem />
                <ChatItem isMe/>
                <ChatItem />
            </View>
            <InputChat />
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
