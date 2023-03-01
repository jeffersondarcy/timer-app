import { StyleSheet } from 'react-native';

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { minHeight: 40 } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });
