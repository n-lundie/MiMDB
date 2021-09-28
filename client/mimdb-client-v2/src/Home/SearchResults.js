import React from 'react';

import { View, Pressable, Image, Text, ScrollView } from 'react-native';

export const SearchResults = (props) => {
  const { results } = props;

  const resElements = results.map((movie) => (
    <View style={resItemStyle} key={movie.id}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster}` }}
        style={{
          height: 55,
          width: 40,
          marginRight: 5,
        }}
      />
      <Text style={{ fontSize: 18, color: '#FFF', overflow: 'hidden' }}>
        {movie.name}
      </Text>
    </View>
  ));

  return <ScrollView style={resContainerStyle}>{resElements}</ScrollView>;
};

const resContainerStyle = {
  backgroundColor: 'hsla(0, 0%, 25%, 0.99)',
  maxHeight: 350,
  width: 300,
  paddingHorizontal: 2,
  marginTop: 35,
  position: 'absolute',
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  // backgroundColor: 'green',
};

const resItemStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  height: 70,
  paddingLeft: 5,
  borderBottomWidth: 1,
};
