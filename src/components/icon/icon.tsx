import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Styles from './icon.styles';
import { useTheme } from '../../hooks/theme/useTheme';

export type IconProps = {
  name: string;
  size: number;
  style?: StyleSheet.NamedStyles<unknown>;
  color: string;
};

let FeatherIcon: any;

try {
  FeatherIcon = require('react-native-vector-icons/Feather').default;
} catch (e) {
  let isErrorLogged = false;

  FeatherIcon = ({ name, color, size, ...rest }: IconProps) => {
    const [styles] = useTheme(Styles);
    if (!isErrorLogged) {
      if (
        !/(Cannot find module|Module not found|Cannot resolve module|Requiring unknown module)/.test(
          (e as any).message
        )
      ) {
        console.error(e);
      }

      console.warn(
        `Tried to use the icon '${name}' in a component from 'react-native-snn-components', but 'react-native-vector-icons/Feather' could not be loaded.`,
        `To remove this warning, try installing 'react-native-vector-icons'.`
      );

      isErrorLogged = true;
    }

    return (
      <Text
        {...rest}
        style={[styles.icon, { color, fontSize: size }]}
        // @ts-expect-error
        pointerEvents="none"
        selectable={false}
      >
        □
      </Text>
    );
  };
}

export const Icon = ({ name, size, color, style }: IconProps) => {
  return <FeatherIcon {...{ name, size, color, style }} />;
};
