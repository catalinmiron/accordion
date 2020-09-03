import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from './components/navigation/BottomNavigator';
import { SafeAreaView, StatusBar } from 'react-native';
import { Styles } from './BaseStyles';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './translations/en';
import de from './translations/de';

i18n.translations = {
  en: en,
  de: de,
};
i18n.locale = Localization.locale.substring(0, 2);
i18n.fallbacks = true;

class CMHClient extends React.Component {
  render(): ReactElement {
    return (
      <SafeAreaView style={Styles.safeArea}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <BottomNavigator />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export { CMHClient };
