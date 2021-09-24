'use strict';

import { StyleSheet } from 'react-native';

export const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  input: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 1,
    fontSize: 20,
  },
  back: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 25,
    width: 50,
    borderRadius: 25,
  },
  button: {},
  submitContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 250,
  },
  submitFont: {
    fontSize: 20,
  },
});
