// REQUIRED
import React, { useEffect } from 'react';

// Import react native components
import { View, Text, Image } from 'react-native';

// Import state: useSelector and/or slice actions
import { useSelector, useDispatch } from 'react-redux';
import {
  updateRecent,
  clearRecent,
  updateSearch,
  clearSearch,
} from '../../store/homeSlice';

// Import Apollo client and gql queries: useMutation and/or useQuery, TRY_LOGIN
import { useMutation } from '@apollo/client';
// <-- Import gql queries here
import { url, options } from '../../model/homeModel';

// Import styles
import { styles } from '../../styles/styles';

// Destructure "navigation" to allow use of nav functions
export const Home = ({ navigation }) => {
  // Assign state to local variables
  const recentFilms = useSelector((state) => state.home.recent);
  const search = useSelector((state) => state.home.search);

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
              date: movie.release_date,
              poster: movie.poster_path,
            };
          });

          dispatch(updateRecent(details));
        });
    }
  }, []);

  useEffect(() => {}, [recentFilms]);

  // Handle any query data
  // useEffect(() => {}, []);

  /* HANDLER FUNCTIONS */
  const handleFilms = () => {
    const elements = recentFilms.map((movie) => {
      return (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            url: `https://image.tmdb.org/t/p/original/${movie.poster}`,
          }}
        />
      );
    });

    return elements;
  };

  return (
    // --- Wrap in any needed wrap components (e.g. TouchableWithoutFeedback) ---
    // Container
    <View style={styles.container}>
      {recentFilms ? handleFilms() : 'no movies'}
    </View>
  );
};
