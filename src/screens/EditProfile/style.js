import {StyleSheet} from 'react-native';
import {APP_FONT_SIZE, THEME_COLORS} from '../../constant/Theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.white,
  },
  input: {
    fontSize: APP_FONT_SIZE.h4,
    marginHorizontal: 25,
    marginVertical: 10,
  },
});

export default styles;
