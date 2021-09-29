import React from 'react';

import { View, Text, Pressable } from 'react-native';

import { useDispatch } from 'react-redux';

import { unAuth } from '../../store/authSlice';
import { clearCurrent, clearRecent } from '../../store/homeSlice';

import { styles } from '../../styles/styles';

export const Settings = (props) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearRecent());
    dispatch(clearCurrent());
    dispatch(unAuth());
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <Pressable onPress={handleLogout} style={styles.buttonRed}>
        <Text style={styles.buttonTextRed}>Logout</Text>
      </Pressable>
    </View>
  );
};
