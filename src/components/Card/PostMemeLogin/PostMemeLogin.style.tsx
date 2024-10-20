import {StyleSheet} from 'react-native';
import {borderRadius, color, fontSize, margin, paddingSize} from "../../config.ts";

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize.lg,
  },
  subText: {
    textAlign: 'center',
    marginTop: margin.lg,
  },
  loginButton: {
    backgroundColor: color.blue,
    borderRadius: borderRadius.full,
    padding: paddingSize.md,
    paddingHorizontal: paddingSize['4xl'],
    marginTop: margin.lg,
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: color.white,
  },
});
