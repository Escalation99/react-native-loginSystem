import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const BookmarkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bookmark Screen</Text>
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
