import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SupportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Support Screen</Text>
        </View>
    )
}

export default SupportScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
