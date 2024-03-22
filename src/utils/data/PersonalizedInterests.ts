import {nanoid} from '@reduxjs/toolkit';
import PhotographyIcon from '../../assets/svgs/PhotographyIcon';
import FoodIcon from '../../assets/svgs/FoodIcon';
import SportsIcon from '../../assets/svgs/SportsIcon';
import BeerIcon from '../../assets/svgs/BeerIcon';
import CookingIcon from '../../assets/svgs/CookingIcon';
import FootballIcon from '../../assets/svgs/FootballIcon';
import ArtsIcon from '../../assets/svgs/ArtsIcon';
import SingingIcon from '../../assets/svgs/SingingIcon';
import DogIcon from '../../assets/svgs/DogIcon';
import BookIcon from '../../assets/svgs/BookIcon';
import CoffeeIcon from '../../assets/svgs/CoffeeIcon';
import WritingIcon from '../../assets/svgs/WritingIcon';

export interface Interest {
  id: string;
  icon: React.JSX.Element;
  title: string;
}

export const personalizedInterests: Interest[] = [
  {
    id: nanoid(),
    icon: PhotographyIcon({}),
    title: 'Photography',
  },
  {
    id: nanoid(),
    icon: FoodIcon({}),
    title: 'Food',
  },
  {
    id: nanoid(),
    icon: SportsIcon({}),
    title: 'Sports',
  },
  {
    id: nanoid(),
    icon: BeerIcon({}),
    title: 'Beer',
  },
  {
    id: nanoid(),
    icon: CookingIcon({}),
    title: 'Cooking',
  },
  {
    id: nanoid(),
    icon: FootballIcon({}),
    title: 'Football',
  },
  {
    id: nanoid(),
    icon: ArtsIcon({}),
    title: 'Arts',
  },
  {
    id: nanoid(),
    icon: SingingIcon({}),
    title: 'Singing',
  },
  {
    id: nanoid(),
    icon: DogIcon({}),
    title: 'Animals',
  },
  {
    id: nanoid(),
    icon: BookIcon({}),
    title: 'Reading',
  },
  {
    id: nanoid(),
    icon: CoffeeIcon({}),
    title: 'Coffee',
  },
  {
    id: nanoid(),
    icon: WritingIcon({}),
    title: 'Writing',
  },
];
