import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {WithSplashScreen} from './src/components/splashScreen/SplashScreen';
import Navigator from './src/utils/navigation/Navigator';
import {Provider} from 'react-native-paper';
import {Provider as StateProvider} from 'react-redux';
import store, {persistor} from './src/stateManagement/store';
import {PersistGate} from 'redux-persist/integration/react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const App = () => {
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAppReady(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <PersistGate persistor={persistor}>
        <StateProvider store={store}>
          <Provider>
            <GestureHandlerRootView style={{flex: 1}}>
              <Navigator />
            </GestureHandlerRootView>
          </Provider>
        </StateProvider>
      </PersistGate>
    </WithSplashScreen>
  );
};

export default App;
