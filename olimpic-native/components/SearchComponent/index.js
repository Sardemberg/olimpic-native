import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchComponent = ({setFilter}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setFilter(searchQuery);
    console.log('Buscando por:', searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Quem você quer buscar?"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button
        title="Buscar"
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '70%'
  }
});

export default SearchComponent;
