// REQUIRED
import React, { useEffect } from 'react';

// Import react native components
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRecent,
  clearRecent,
  updateSearch,
  clearSearch,
  setCurrent,
} from '../../store/homeSlice';

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
// <-- Import gql queries here
import { url, options } from '../../model/homeModel';

// Import styles
import { styles } from '../../styles/styles';

// Import app components
import { CarouselMovieItem } from './CarouselMovieItem';

// Destructure "navigation" to allow use of nav functions
export const Home = ({ navigation }) => {
  // Assign state to local variables
  const recentFilms = useSelector((state) => state.home.recent);
  const search = useSelector((state) => state.home.search);
  const current = useSelector((state) => state.home.current);

  // Invoke dispatch
  const dispatch = useDispatch();

  // Create mutation variables using gql query
  // const [tryLogin, { data, loading, error }] = useMutation();

  // IMPORTANT: handle query/mutation responses inside useEffect
  useEffect(() => {
    if (!recentFilms.length) {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          const details = data.results.map((movie) => {
            return {
              id: movie.id,
              name: movie.original_title,
              date: movie.release_date.substring(0, 4),
              poster: movie.poster_path,
            };
          });

          // Set recentFilms and current
          dispatch(updateRecent(details));
          dispatch(setCurrent(details[0]));
        });
    }
  }, []);

  // Handle any query data
  // useEffect(() => {}, []);

  /* HANDLER FUNCTIONS */
  // Update current on swipe to new film
  const handleSwipe = (index) => {
    dispatch(setCurrent(recentFilms[index]));
  };

  const isCarousel = React.useRef(null);

  return (
    // --- Wrap in any needed wrap components (e.g. TouchableWithoutFeedback) ---
    // Container
    <View style={[styles.container, { justifyContent: 'flex-start' }]}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          maxWidth: 300,
          minWidth: 100,
          maxHeight: 100,
          minHeight: 90,
          backgroundColor: 'blue',
        }}
      >
        <Text style={styles.homeTitle}>{current ? current.name : ''}</Text>
        <Text style={styles.homeSubTitle}>{current ? current.date : ''}</Text>
      </View>
      {recentFilms ? (
        <View
          style={{
            alignItems: 'center',
          }}
        >
          {/* CAROUSEL VIEW CONTAINER */}
          <View
            style={{
              height: 425,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green',
            }}
          >
            {/* CAROUSEL */}
            <Carousel
              ref={isCarousel}
              data={recentFilms}
              renderItem={CarouselMovieItem}
              onSnapToItem={handleSwipe}
              itemWidth={270}
              itemHeight={400}
              sliderWidth={400}
              sliderHeight={443}
              inactiveSlideScale={0.75}
              contentContainerCustomStyle={{
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.7,
                shadowRadius: 5,
                shadowOffset: {
                  height: 5,
                },
              }}
            />
          </View>
        </View>
      ) : (
        'no movies'
      )}
    </View>
  );
};
