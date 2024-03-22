import {nanoid} from '@reduxjs/toolkit';
import EarnCoinIcon from '../../assets/svgs/EarnCoinIcon';
import EmojiSmileIcon from '../../assets/svgs/EmojiSmileIcon';
import LaughIcon from '../../assets/svgs/LaughIcon';

export interface GuidelineDataType {
  key: string;
  icon: React.JSX.Element;
  title: string;
  subtitle: string;
}

export const guidelineData: GuidelineDataType[] = [
  {
    key: nanoid(),
    icon: EarnCoinIcon({}),
    title: 'Earn coins for everyday login',
    subtitle:
      'For everyday you login you get free coins which yoou can use to purchse premium contents',
  },
  {
    key: nanoid(),
    icon: EmojiSmileIcon({}),
    title: 'Complete your profile to enable you attend events',
    subtitle:
      'Head over to your profile section to complete your profile. This will enable you attend events hosted by us',
  },
  {
    key: nanoid(),
    icon: LaughIcon({}),
    title: 'Keep the community safe and peaceful',
    subtitle:
      'Kindly adhere to our policies of keeping the community peaceful and free of hate or vices. ',
  },
];
