'use strict';

import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 1,
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 25,
    width: 50,
    backgroundColor: 'blue',
  },
  buttonContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonFont: {
    fontSize: 20,
    color: 'blue',
  },
});
