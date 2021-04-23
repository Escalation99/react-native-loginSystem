import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ExploreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Explore Screen</Text>
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
