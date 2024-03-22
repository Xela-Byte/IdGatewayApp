import {nanoid} from '@reduxjs/toolkit';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Checkbox} from 'react-native-paper';
import {appColors, screenHeight} from '../../styles/UniversalStyle';
import CustomText from '../text/CustomText';

type Props = {
  queryValue: string;
};

const LanguageSelection = ({queryValue}: Props) => {
  const [selectedLanguages, setSelectedLanguages] = useState<any>([]);
  const [languages, setLanguages] = useState<any>([]);

  interface LanguageObject {
    id: string;
    value: string;
  }

  const transformLanguages = (
    languagesArray: {languages: {[key: string]: string}}[],
  ): LanguageObject[] => {
    const uniqueValues: Set<string> = new Set();
    const transformedLanguages: LanguageObject[] = [];

    languagesArray.forEach(languageObj => {
      const languageKeys = Object.keys(languageObj.languages);
      languageKeys.forEach(key => {
        const value = languageObj.languages[key];
        if (!uniqueValues.has(value)) {
          uniqueValues.add(value);
        }
      });
    });

    // Convert set to array, sort alphabetically, and construct the result array
    const sortedUniqueValues = Array.from(uniqueValues).sort();

    sortedUniqueValues.forEach(value => {
      transformedLanguages.push({id: nanoid(), value: value});
    });

    return transformedLanguages;
  };

  useEffect(() => {
    // Fetch the list of countries and their languages
    axios
      .get('https://restcountries.com/v3.1/all?fields=languages')
      .then(response => {
        const transformedResult = transformLanguages(response.data);
        setLanguages(transformedResult);
      })
      .catch(error => {
        console.error('Error fetching languages:', error);
      });
  }, []);

  const toggleCheckbox = (item: any) => {
    const existingLanguage = selectedLanguages.find((lang: any) => {
      return lang.value === item.value;
    });

    if (existingLanguage) {
      const filteredLanguages = selectedLanguages.filter((lang: any) => {
        return lang.value !== item.value;
      });
      setSelectedLanguages(filteredLanguages);
    } else {
      setSelectedLanguages((prevLanguages: any) => [...prevLanguages, item]);
    }
  };

  const renderItem = ({item}: {item: any}) => (
    <Pressable
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}
      onPress={() => toggleCheckbox(item)}>
      <Checkbox
        status={
          selectedLanguages && selectedLanguages.includes(item)
            ? 'checked'
            : 'unchecked'
        }
        color={appColors.onGradientPrimary}
      />
      <CustomText>{item.value}</CustomText>
    </Pressable>
  );

  const flatListRef = useRef<FlatList | null>(null);
  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      languages.length > 0 &&
        flatListRef.current.scrollToIndex({index, animated: true});
    }
  };

  const handleScrollSearch = () => {
    const searchValue = languages.find((item: any) => {
      return (
        item.value.toLowerCase() === queryValue.toLowerCase() ||
        item.value.toLowerCase().startsWith(queryValue.toLowerCase())
      );
    });

    if (searchValue) {
      const indexOfValue = languages.indexOf(searchValue);

      if (indexOfValue !== -1) {
        scrollToIndex(indexOfValue);
      } else {
        scrollToIndex(0);
      }
    } else {
      scrollToIndex(0);
    }
  };

  useEffect(() => {
    languages && handleScrollSearch();
  }, [queryValue]);

  return (
    <View style={{flex: 1, padding: 16}}>
      <FlatList
        ref={flatListRef}
        data={languages}
        initialScrollIndex={0}
        onScrollToIndexFailed={item => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            flatListRef.current?.scrollToIndex({
              index: item.index,
              animated: true,
            });
          });
        }}
        style={{height: screenHeight / 2}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default LanguageSelection;
