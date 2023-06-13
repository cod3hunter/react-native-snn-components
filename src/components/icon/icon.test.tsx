console.error = () => {};
console.warn = () => {};

import React from 'react';
import { render } from '@testing-library/react-native';
import { Icon } from './icon';
it('render icon', async () => {
  const { toJSON } = render(<Icon name="plus" color="green" size={12} />);
  expect(toJSON()).toMatchSnapshot();
});
