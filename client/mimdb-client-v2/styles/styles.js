'use strict';

import { StyleSheet } from 'react-native';

// General styles for common elements
export const styles = StyleSheet.create({
  // Used for top level View element in components
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'hsla(230, 5%, 18%, 1)',
  },

  // Used for View element containing form
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'blue',
  },

  // TextInput style for Login/Register form
  formInput: {
    fontSize: 18,
    color: '#FFF',
    width: 275,
    height: 50,
    paddingHorizontal: 5,
    borderBottomColor: '#FF3535',
    borderBottomWidth: 1.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'hsla(255, 100%,100%, 0.1)',
    marginVertical: 15,
  },

  // Pressable style for form
  buttonTextRed: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonRed: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3535',
    borderRadius: 25,
  },
  buttonGrey: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3F3F3F',
    borderRadius: 25,
  },

  // Standard box shadow
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },

  // Home title font
  homeTitle: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { height: 5 },
  },
  homeSubTitle: {
    fontSize: 20,
    color: 'hsla(255, 100%, 100%, 0.5)',
  },

  // Home search bar
  search: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    width: 300,
    height: 38,
    paddingHorizontal: 5,
    borderRadius: 25,
    backgroundColor: 'hsla(255, 100%,100%, 0.1)',
    marginBottom: 5,
    position: 'relative',
  },

  searchWithRes: {
    textAlign: 'center',
    fontSize: 15,
    color: '#FFF',
    width: 300,
    height: 38,
    paddingHorizontal: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'hsla(255, 100%,100%, 0.1)',
    marginBottom: 5,
    borderBottomColor: '#FF3535',
    borderBottomWidth: 1.5,
    position: 'relative',
  },
});
