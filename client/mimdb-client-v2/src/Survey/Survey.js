import React from 'react';

import { View, Text, Image, Pressable } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Slider from '@react-native-community/slider';

// Import state
import { useSelector, useDispatch } from 'react-redux';
import { setResponse, clearAllResponses } from '../../store/surveySlice';

import { styles } from '../../styles/styles';

// Import app components

export const Survey = (props) => {
  const movie = useSelector((state) => state.home.current);
  const questionState = useSelector((state) => state.survey);

  const dispatch = useDispatch();

  const isCarousel = React.useRef(null);

  const handleSlide = (val) => {
    const newVal = setResponse(val, index);
    dispatch(newVal);
  };

  const CarouselQuestionItem = ({ item, index }) => {
    const handleSlide = (val) => {
      const newVal = setResponse(val, index);
      dispatch(newVal);
    };
    return (
      <View
        style={[
          questionContainerStyle,
          { paddingTop: 30, paddingHorizontal: 20 },
        ]}
      >
        <Text style={[styles.homeTitle, { fontSize: 25 }]}>{item.text}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={[styles.homeTitle, { fontSize: 150 }]}>
            {questionState[`q${index}`]}
          </Text>
          <Slider
            onValueChange={handleSlide}
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#FF3535"
            maximumTrackTintColor="hsla(0, 100%, 100%, 0.5)"
          />
        </View>
      </View>
    );
  };

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
        itemWidth={335}
        itemHeight={400}
        sliderWidth={400}
        sliderHeight={400}
        inactiveSlideScale={0.95}
        contentContainerCustomStyle={{
          alignItems: 'center',
        }}
      />
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'flex-end',
          marginBottom: 10,
        }}
      >
        <Pressable style={styles.buttonRed}>
          <Text style={styles.buttonTextRed}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

const questions = [
  {
    text: 'Rate the story',
    options: [1, 2, 3, 4, 5],
  },
  {
    text: 'Rate the visuals',
    options: [1, 2, 3, 4, 5],
  },
  {
    text: 'Rate the performances',
    options: [1, 2, 3, 4, 5],
  },
  {
    text: 'How likely are you to watch this film again?',
    options: [1, 2, 3, 4, 5],
  },
];

const questionContainerStyle = {
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: 335,
  height: 400,
  borderRadius: 15,
  backgroundColor: '#151515',
};
