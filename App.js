import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Button,
  SafeAreaView,
  Text,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import {UseReducer} from './src/UseReducer';
import {UseState} from './src/UseState';

import {strings} from './src/localization/localization';

import Restart from 'react-native-restart';

const App = () => {
  const [loading, setLoading] = useState(true);

  const getData = async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log('error', error);
    }
  };

  const langOfApp = async () => {
    const lang = await getData('lang');
    if (lang !== null) {
      strings.setLanguage(lang);
      // axios.defaults.headers.locale = lang;
      console.log('lang if !null', lang);
      setLoading(false);
    } else {
      console.log('lang ', lang, axios.defaults.headers.locale);
      strings.setLanguage('kz');
      // axios.defaults.headers.locale = 'kz';
    }
  };

  const Selected = async value => {
    console.log('Selected');
    console.log(value);
    await AsyncStorage.setItem('lang', value);
    Restart.Restart();
  };

  useEffect(() => {
    langOfApp();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <View>
          <Text>..............................</Text>
        </View>
      ) : (
        <View>
          <Text>{strings.hi}</Text>
          <TouchableOpacity onPress={() => Selected('kz')}>
            <Text>kz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Selected('ru')}>
            <Text>ru</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Selected('en')}>
            <Text>en</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
