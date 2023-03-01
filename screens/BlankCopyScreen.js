import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const BlankCopyScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Text style={GlobalStyles.TextStyles(theme)['Text']}>
        {'Double click me to edit 👀'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(BlankCopyScreen);
