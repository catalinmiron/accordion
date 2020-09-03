import React, { ReactElement } from 'react';
import { Text, View } from 'react-native';
import Styles from './LiveStyles';
import CuePoints from '../components/cue-points';
import CompetitionTitle from '../components/competition-title';

const mockJSONData = require('../../player_mock_data.json');
export class Live extends React.Component {
  render(): ReactElement {
    return (
      <View style={Styles.component}>
        <View style={Styles.mainContent}>
          <CuePoints
            horsePoints={mockJSONData[1].content.current_cue_point.head_number}
            horseName={mockJSONData[1].content.current_cue_point.horse.name.sport}
            countryFlag={mockJSONData[1].content.current_cue_point.rider.rider_nation.flag_image}
            riderName={mockJSONData[1].content.current_cue_point.rider.name}
          ></CuePoints>
          <CompetitionTitle
            competitionName={mockJSONData[2].content.title}
            eventName={mockJSONData[2].content.subtitle}
          >
          </CompetitionTitle>
        </View>
      </View>
    );
  }
}
