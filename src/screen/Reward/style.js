import {StyleSheet} from 'react-native';

const Styles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.ghostWhite,
      paddingHorizontal: 24,
      paddingVertical: 40,
    },
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconUserContainer: {
      backgroundColor: theme.colors.white,
      padding: 10,
      borderRadius: 99,
    },
    taskText: {
      marginTop: 4,
    },
  });

export default Styles;
