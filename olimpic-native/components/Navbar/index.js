import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NavBar({setShowFavorites}){
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => setShowFavorites(false)}>
                <Text style={styles.navItem}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowFavorites(true)}>
                <Text style={styles.navItem}>Favoritos</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 65,
        backgroundColor: '#004d40',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    navItem: {
        color: 'white'
    }
})