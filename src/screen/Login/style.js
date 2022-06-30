import {StyleSheet} from 'react-native';

const Styles = theme => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: 24,
    },
    appTitleContainer: {
      flexDirection: 'row',
    },
    appTitleLogo: {
      width: 88,
      height: 88,
      flex: 0.3,
    },
    appTitleText: {
      fontSize: 16,
      flex: 0.7,
      alignSelf: 'center',
      fontFamily: 'Inter-Bold',
    },
    intructionTitleText: {
      marginTop: 14,
    },
    dropdownTitleText: {
      marginVertical: 8,
    },
    dropdownStyle: {
      borderColor: '#DEDEDE',
    },
    dropdownPlaceholderStyle: {color: '#A7A6AB'},
    dropdownContainerStyle: {
      borderColor: '#DEDEDE',
      backgroundColor: '#FFFFFF',
    },
  });
};

export default Styles;
