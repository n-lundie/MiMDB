import React, { useEffect } from 'react';

import { View, TextInput, Text } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { updateSearch, setSearchRes } from '../../store/homeSlice';

// Import fetch query
import { url } from '../../model/movieSearchModel';
import { options } from '../../model/homeModel';

// Import styles
import { styles } from '../../styles/styles';

// Import app components
import { SearchResults } from './SearchResults';

export const SearchBar = (props) => {
  // Assign state to local variables
  const home = useSelector((state) => state.home);

  const dispatch = useDispatch();

  handleSearch = (text) => {
    const newSearch = updateSearch(text);
    dispatch(newSearch);
  };

  useEffect(() => {
    console.log(home);
  }, []);

  useEffect(() => {
    if (home.search) {
      const searchUrl = url + home.search;
      console.log(searchUrl);

      fetch(searchUrl, options)
        .then((res) => {
          console.log(res.status);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const results = data.results.map((movie) => {
            return {
              id: movie.id,
              name: movie.original_title,
              date: movie.release_date.substring(0, 4),
              poster: movie.poster_path,
            };
          });

          console.log(results);
          dispatch(setSearchRes(results));
        });
    }
    if (!home.search) {
      dispatch(setSearchRes([]));
    }
  }, [home.search]);

  useEffect(() => {
    if (home.searchRes && home.searchRes.length) {
      console.log(home.search);
    }
  }, [home.searchRes]);

  return (
    <View
      style={{ zIndex: 2, alignItems: 'center', justifyContent: 'flex-end' }}
    >
      <TextInput
        style={home.searchRes.length ? styles.searchWithRes : styles.search}
        placeholder="search"
        placeholderTextColor="hsla(255, 100%, 100%, 0.5)"
        returnKeyType="search"
        onChangeText={handleSearch}
      />
      {home.searchRes.length ? (
        <SearchResults results={home.searchRes} />
      ) : (
        <View></View>
      )}
    </View>
  );
};
