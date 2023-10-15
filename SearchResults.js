import React from 'react';
import { Text, View } from 'react-native';

const SearchResults = ({route}) => {

  const { query } = route.params;

  return (
    <View>
      <Text>Kết quả tìm kiếm cho: {query}</Text>

      {/* Hiển thị kết quả tìm kiếm ở đây */}

    </View>
  );
}

export default SearchResults;