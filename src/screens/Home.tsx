import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './HomeStyles';

export class Home extends React.Component {
  render(): ReactElement {
    return (
      <View style={Styles.component}>
        <View style={Styles.header}>
          <Text style={Styles.headerText}>ClipMyHorse.TV</Text>
        </View>
        <LinearGradient colors={['rgba(9,15,23,0.8)', 'rgba(9,15,23,0)']} style={Styles.headerGradient} />
        <View style={Styles.mainContent}>
          <Text style={Styles.mainText}>I am the home screen!</Text>
        </View>
      </View>
    );
  }
}
