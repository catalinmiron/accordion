import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import Styles from './ArchiveStyles';

export class Archive extends React.Component {
  render(): ReactElement {
    return (
      <View style={Styles.component}>
        <View style={Styles.mainContent}>
          <Text style={Styles.mainText}>I am the archive screen!</Text>
        </View>
      </View>
    );
  }
}
