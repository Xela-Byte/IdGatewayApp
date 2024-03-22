import {nanoid} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import LadyWhite from '../../assets/images/lady-white.jpg';
import LadyEbony from '../../assets/images/lady-ebony.jpg';

export interface PhotoCard {
  name: string;
  age: number;
  photo: ImageSourcePropType;
  key: string;
}

export const photoCards: PhotoCard[] = [
  {
    age: 25,
    key: nanoid(),
    name: 'Sheila',
    photo: LadyWhite,
  },
  {
    age: 23,
    key: nanoid(),
    name: 'Xela',
    photo: LadyEbony,
  },
  {
    age: 33,
    key: nanoid(),
    name: 'Hannah',
    photo: LadyWhite,
  },
  {
    age: 28,
    key: nanoid(),
    name: 'Rosemary',
    photo: LadyEbony,
  },
];
