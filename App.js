import React from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import { View } from 'react-native';

const App = () => {
  return (
    <View>
      <Header headerText={'Album'} />
      <AlbumList />
    </View>
  )
}

export default App;