
import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const SearchPage = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Xử lý tìm kiếm ở đây
    navigation.navigate('SearchResults', {query: searchQuery}) 
  }

  return (
    <View>
      <Text>Tìm kiếm</Text>

      <TextInput
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <Button title="Tìm kiếm" onPress={handleSearch} />
    </View>
  );
}

export default SearchPage;