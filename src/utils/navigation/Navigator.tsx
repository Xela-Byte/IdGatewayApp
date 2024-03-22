import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth/AuthNavigator';
import BottomTabNavigator from './bottomTab/BottomTabNavigator';
import {useSelector} from 'react-redux';
import {selectNewUser} from '../../stateManagement/features/auth/authSlice';

type Props = {};

const Navigator = (props: Props) => {
  const isNewUser = useSelector(selectNewUser);

  return (
    <NavigationContainer>
      {isNewUser ? <AuthNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
