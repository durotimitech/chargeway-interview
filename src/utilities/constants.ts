import {Dimensions, StatusBar} from 'react-native';

const CONSTANTS = {
  COLORS: {
    primary: "#6A0DAD",
    primaryLight: "#CBC3E3",
    error: "#df4759",
    success: "#3CB878",
  },
  DIMENSIONS: {
    padding: 15,
    borderRadius: 7,
    statusBarHeight: StatusBar.currentHeight,
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height,
  },
};

export default CONSTANTS;
