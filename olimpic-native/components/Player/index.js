import React, {useState} from "react";
import { View, StyleSheet, Text, Image, TouchableHighlight } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Player({image, name, setFavorites, favorites}){
    const [isClicked, setIsClicked] = useState(favorites.includes(name))

    const handleFavorite = () => {
        if(isClicked){
            setIsClicked(false)
            const newFavorites = favorites.filter((player) => {
                return player != name
            })
            setFavorites(newFavorites);
        }else{
            setIsClicked(true)
            const newFavorites = [...favorites, name]
            setFavorites(newFavorites)
        }
    }

    return (
        <TouchableHighlight onPress={handleFavorite} style={styles.player}>
            <>
                <Image src={image} style={styles.image}/>
                <Text style={styles.name}>
                    {name}
                </Text>
                {isClicked ? <AntDesign name="star" size={32} color="green" /> : <AntDesign name="staro" size={32} color="green" /> }
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    player: {
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,  // 0.1 (26/255) is roughly the opacity conversion from #0000001a
        shadowRadius: 8,
    },
    image: {
        width: 270,
        height: 270,
        borderRadius: 30,
    },
    name: {
        marginTop: 10,
        fontSize: 20,
    }
})