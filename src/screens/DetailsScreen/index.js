import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
            <Button title="Ke halaman Details lagi" onPress={() => navigation.push("Details")} />
            <Button title="Ke halaman Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Ke halaman sebelumnya" onPress={() => navigation.goBack()} />
            <Button title="Ke halaman awal" onPress={() => navigation.popToTop()} />
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
