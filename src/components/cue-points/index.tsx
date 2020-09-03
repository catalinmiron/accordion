import React, { useState, useRef } from 'react';
import { CuePointProps } from './props';
import { View, Text, StyleSheet } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import {
  Component,
  HorseTab,
  HorseImage,
  HorsePoints,
  HorseName,
  RiderImage,
  RiderTab,
  Separator,
  RiderName,
  RightArrowHorseTab,
  RightArrowRiderTab,
  RiderNation,
} from './styles';

const data = require('../../../player_mock_data.json');

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const CuePoints: React.FC<CuePointProps> = (props: CuePointProps) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();

  return (
      <Component>
        <HorseTab
          onPress={() => {
            console.log(currentIndex);
          }}
        >
          <View>
            <HorseImage source={require('./../../../assets/images/horse_icon.png')} />
            <HorsePoints>{props.horsePoints}</HorsePoints>
            <HorseName>{props.horseName}</HorseName>
            <RightArrowHorseTab name="ios-arrow-forward" size={24} color="white" />
            <View>
              <Text>Gender: {data[1].content.current_cue_point.horse.gender.value}</Text>
              <Text>Born: {data[1].content.current_cue_point.horse.birth_date.year}</Text>
              <Text>Breed: {data[1].content.current_cue_point.horse.breed.name}</Text>
              <Text>Breeder: {data[1].content.current_cue_point.horse.breeder.name}</Text>
              <Text>S:{data[1].content.current_cue_point.horse.horse_pedigree.father}</Text>
              <Text>DS:{data[1].content.current_cue_point.horse.horse_pedigree.mother}</Text>
              <Text>GDS: {data[1].content.current_cue_point.horse.horse_pedigree.mother_mother_father}</Text>
            </View>
           </View>
         </HorseTab>
        <Separator />
        <RiderTab onPress={() => console.log(currentIndex)}>
          <View>
            <RiderImage source={require('./../../../assets/images/rider_icon.png')} />
            <RiderNation source={{ uri: props.countryFlag }} />
            <RiderName>{props.riderName}</RiderName>
            <RightArrowRiderTab name="ios-arrow-forward" size={24} color="white" />
            <View>
              <Text>Country: {data[1].content.current_cue_point.rider.rider_nation.iso_code}</Text>
              <Text>Club: {data[1].content.current_cue_point.rider.club}</Text>
              <Text>Long Leader: {data[1].content.current_cue_point.long_leader.name}</Text>
            </View>
          </View>
        </RiderTab>
      </Component>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {
    marginTop: 20,
  },
}); */

export default CuePoints;
