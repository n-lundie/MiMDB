'use strict';

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'blue',
  },
  formInput: {
    width: 250,
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 25,
  },
});
