import React from 'react';

import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Import state
import { useSelector, useDispatch } from 'react-redux';
// <-- Import slice actions

import { styles } from '../../styles/styles';

// Import app components

export const Survey = (props) => {
  const movie = useSelector((state) => state.home.current);
  const isCarousel = React.useRef(null);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: 0,
        },
      ]}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.backdrop}`,
        }}
        style={{
          width: 375,
          height: 200,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowOffset: { height: 5 },
        }}
      />
      <View
        style={{
          marginTop: 125,
          width: '100%',
          position: 'absolute',
          alignItems: 'flex-start',
        }}
      >
        <Text
          style={[styles.homeTitle, { shadowOffset: { height: 3, width: -1 } }]}
        >
          {movie.name}
        </Text>
        <Text
          style={[
            styles.homeSubTitle,
            {
              color: '#FFF',
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowOffset: { height: 1 },
              shadowRadius: 0.5,
            },
          ]}
        >
          {movie.date}
        </Text>
      </View>
      <Carousel
        removeClippedSubviews={false}
        ref={isCarousel}
        data={questions}
        renderItem={CarouselQuestionItem}
        itemWidth={350}
        itemHeight={400}
        sliderWidth={400}
        sliderHeight={400}
        inactiveSlideScale={0.95}
        contentContainerCustomStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  );
};

const questions = [
  {
    text: 'Question 1',
    options: 'Options...',
  },
  {
    text: 'Question 2',
    options: 'Options...',
  },
  {
    text: 'Question 3',
    options: 'Options...',
  },
  {
    text: 'Question 4',
    options: 'Options...',
  },
];

const CarouselQuestionItem = ({ item, index }) => {
  return (
    <View style={questionContainerStyle}>
      <Text>{item.text}</Text>
      <Text>{item.options}</Text>
    </View>
  );
};

const questionContainerStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  height: 400,
  borderRadius: 15,
  backgroundColor: 'green',
};
