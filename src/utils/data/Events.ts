import {nanoid} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';
import InterEthnicBG from '../../assets/images/interEthnicBG.jpg';
import SingleMeetBG from '../../assets/images/singleMeetBG.jpg';
import LoveBG from '../../assets/images/loveBG.jpg';
import LoveHutBG from '../../assets/images/loveHutBG.jpg';

export interface EventType {
  key: string;
  date: string;
  location: string;
  title: string;
  backgroundImage: ImageSourcePropType;
}

export const events: EventType[] = [
  {
    key: nanoid(),
    title: 'Inter-Ethnic',
    date: 'Wed, July 25, 6:00 PM',
    location: 'Maddison Square Garden, Lagos, Nigeria',
    backgroundImage: InterEthnicBG,
  },
  {
    key: nanoid(),
    title: 'Singles Meet',
    date: 'Mon, July 17, 5:00 PM',
    location: 'Cubana Hotels and Suite, Banana Island',
    backgroundImage: SingleMeetBG,
  },
  {
    key: nanoid(),
    title: 'Love Feast',
    date: 'Wed, July 25, 6:00 PM',
    location: 'Maddison Square Garden, Lagos, Nigeria',
    backgroundImage: LoveBG,
  },
  {
    key: nanoid(),
    title: 'Love Hut Hangout',
    date: 'Mon, July 17, 5:00 PM',
    location: 'Cubana Hotels and Suite, Banana Island',
    backgroundImage: LoveHutBG,
  },
];
