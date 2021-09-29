// REQUIRED
import React, { useEffect } from 'react';

// Import react native components
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRecent,
  clearRecent,
  updateSearch,
  clearSearch,
  clearSearchRes,
  setCurrent,
} from '../../store/homeSlice';

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
// <-- Import gql queries here
import { url, options } from '../../model/homeModel';

// Import styles
import { styles } from '../../styles/styles';

// Import app components
// import { CarouselMovieItem } from './CarouselMovieItem';
import { SearchBar } from './SearchBar';

// Destructure "navigation" to allow use of nav functions
export const Home = ({ navigation }) => {
  // Assign state to local variables
  const recentFilms = useSelector((state) => state.home.recent);
  const current = useSelector((state) => state.home.current);
  const search = useSelector((state) => state.home);

  const isCarousel = React.useRef(null);

  // Invoke dispatch
  const dispatch = useDispatch();

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
              backdrop: movie.backdrop_path,
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

  useEffect(() => {
    console.log(search);
  }, [search]);

  // Carousel item comp
  const CarouselMovieItem = ({ item, index }) => {
    return (
      <Pressable
        style={ItemContainerStyle}
        onPress={() => {
          navigation.navigate('Survey');
        }}
      >
        <Image
          source={{ url: `https://image.tmdb.org/t/p/original/${item.poster}` }}
          style={ItemImageStyle}
        />
      </Pressable>
    );
  };

  /* HANDLER FUNCTIONS */
  // Update current on swipe to new film
  const handleSwipe = (index) => {
    dispatch(setCurrent(recentFilms[index]));
  };

  // Close keyboard and clear search on press
  const handlePress = () => {
    Keyboard.dismiss();
    dispatch(clearSearch());
    dispatch(clearSearchRes());
  };

  return (
    // --- Wrap in any needed wrap components (e.g. TouchableWithoutFeedback) ---
    // Container
    <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
      <View
        style={[
          styles.container,
          { justifyContent: 'flex-start', paddingHorizontal: 0, paddingTop: 0 },
        ]}
      >
        <View
          style={{
            backgroundColor: '#151515',
            alignContent: 'center',
            width: '100%',
            height: 90,
            paddingBottom: 5,
            justifyContent: 'flex-end',
            shadowColor: '#000',
            shadowOpacity: 1,
            zIndex: 2,
          }}
        >
          <SearchBar />
        </View>

        {current.name ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: 305,
              minWidth: 305,
              maxHeight: 90,
              minHeight: 90,
              overflow: 'hidden',
              marginTop: 15,
              zIndex: 0,
              // backgroundColor: 'blue',
            }}
          >
            <Text
              style={
                current.name.length < 29
                  ? styles.homeTitle
                  : [styles.homeTitle, { fontSize: 22 }]
              }
            >
              {current ? current.name : ''}
            </Text>
            <Text style={styles.homeSubTitle}>
              {current ? current.date : ''}
            </Text>
          </View>
        ) : (
          <View></View>
        )}
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
                // backgroundColor: 'green',
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
    </TouchableWithoutFeedback>
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
