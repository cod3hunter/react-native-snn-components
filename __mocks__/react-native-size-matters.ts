'use strict';

const rnSizeMatters = jest.createMockFromModule<any>(
  'react-native-size-matters'
);

rnSizeMatters.moderateScale = (val: number) => val;
rnSizeMatters.verticalScale = (val: number) => val;

module.exports = rnSizeMatters;
