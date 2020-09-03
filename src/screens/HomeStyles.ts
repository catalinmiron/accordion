import { StyleSheet } from 'react-native';
import { Colors } from '../BaseStyles';

export default StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: Colors.ebony,
  },
  header: {
    height: 70,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 90,
  },
  headerText: {
    paddingLeft: 20,
    fontSize: 20,
    flex: 1,
    color: 'white',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: 'white',
  },
});
