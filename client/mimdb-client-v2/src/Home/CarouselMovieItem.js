import React from 'react';

import { View, Image, Pressable } from 'react-native';

import { useSelector } from 'react-redux';

import { styles } from '../../styles/styles';

export const CarouselMovieItem = ({ item, index }) => {
  return (
    <Pressable
      style={ItemContainerStyle}
      onPress={() => {
        console.log(item);
      }}
    >
      <Image
        source={{ url: `https://image.tmdb.org/t/p/original/${item.poster}` }}
        style={ItemImageStyle}
      />
    </Pressable>
  );
};

const ItemContainerStyle = {
  width: 270,
  height: 400,
};

const ItemImageStyle = {
  flex: 1,
  borderRadius: 10,
};
