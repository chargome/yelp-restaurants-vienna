import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchIcon: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },

});

interface Props {
  term: string;
  setTerm(newTerm: string): void;
  submitTerm(): void;
}

const SearchScreen: React.FC<Props> = ({ term, setTerm, submitTerm }) => (
  <View style={styles.background}>
    <Feather style={styles.searchIcon} name="search" />
    <TextInput
      style={styles.input}
      placeholder="Search"
      value={term}
      onChangeText={setTerm}
      onEndEditing={submitTerm}
    />
  </View>
);

export default SearchScreen;
