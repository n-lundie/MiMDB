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
    width: 250,
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
    marginVertical: 10,
  },

  // Pressable style for form
  buttonText: {
    fontSize: 25,
  },
});
