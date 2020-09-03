import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Component = styled.View`
  display: flex;
  width: 100%;
  height: 18%;
  background-color: #33414b;
`;

export const HorseTab = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: #fff;
`;

export const HorseImage = styled.Image`
  flex-basis: 40px;
`;

export const HorsePoints = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
  margin: 0 0 0 -4%;
`;

export const HorseName = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
`;

export const RightArrowHorseTab = styled(Ionicons)`
  font-size: 34px;
`;

export const Separator = styled.View`
  margin: 5px 10px 0 10px;
  height: 1px;
  width: 95%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const RiderTab = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: #fff;
`;

export const RiderImage = styled.Image`
  flex-basis: 40px;
`;

export const RiderNation = styled.Image`
  width: 32px;
  height: 20px;
  margin: 0 0 0 -4%;
`;

export const RiderName = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.5px;
`;

export const RightArrowRiderTab = styled(Ionicons)`
  font-size: 34px;
`;

export const HorseDetails = styled.View`
  /* padding: 16px;
  padding-left: 24px;
  position: absolute;
  bottom: 0; */
`;

export const RiderDetails = styled.View`
  /*   padding: 16px;
  padding-left: 24px;
  position: absolute;
  bottom: 0; */
`;
