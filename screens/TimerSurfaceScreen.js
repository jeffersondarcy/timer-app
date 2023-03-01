import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { Center, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TimerSurfaceScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View>
        <Center width={240} height={200} bgColor={theme.colors.light}>
          <Text style={GlobalStyles.TextStyles(theme)['Text']}>
            {'00:00:00\n'}
          </Text>
        </Center>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TimerSurfaceScreen);
