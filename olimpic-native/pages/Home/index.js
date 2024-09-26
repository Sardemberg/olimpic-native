import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import NavBar from '../../components/Navbar';
import Player from '../../components/Player';
import SearchComponent from '../../components/SearchComponent';
import football from '../../service/football';

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [filter, setFilter] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const getAllPlayers = () => {
    return football.getCachedRequest();
  };

  useEffect(() => {
    const response = getAllPlayers();

    const players = response.response.map(player => ({
      id: player["player"].id,
      name: player["player"].name,
      image: player["player"].photo,
    }));

    setPlayers(players);
  }, []);

  useEffect(() => {
    console.log(showFavorites)
  }, [showFavorites]);

  const renderPlayers = (players) => {
    if(showFavorites){
      const favoritesRender = players.filter(player => {
        return favorites.includes(player.name)
      });

      if(filter == "") return favoritesRender;

      const filteredPlayers = players.filter((player) => {
        return favorites.includes(player.name) && player.name.includes(filter);
      });

      return filteredPlayers;
    }
    
    if(filter == "") return players;

    const filteredPlayers = players.filter((player) => {
      return player.name.includes(filter);
    });
    
    return filteredPlayers;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <SearchComponent setFilter={setFilter}/>
      <ScrollView contentContainerStyle={styles.playersContent}>
        {
          players.length > 0 ? (
            renderPlayers(players).map(player => (
              <View key={player.id} style={styles.playerCard}>
                <Player image={player.image} name={player.name} setFavorites={setFavorites} favorites={favorites}/>
              </View>
            ))
          ) : (
            <Text style={styles.noPlayersText}>Nenhum jogador encontrado.</Text>
          )
        }
      </ScrollView>
      <NavBar setShowFavorites={setShowFavorites}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  playersContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  playerCard: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
  },
  noPlayersText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});
