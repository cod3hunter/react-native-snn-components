console.error = () => {};
console.warn = () => {};

import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { PresenceList } from './presence-list';

const students = {
  1: {
    name: 'Teste',
    value: '2',
  },
  2: {
    name: 'oii',
    value: '2',
  },
  3: {
    name: 'Test6e',
    value: '1',
  },
  4: {
    name: 'Te5ste',
    value: '',
  },
};

const agenda = [
  { students: Object.values(students) },
  { students: Object.values(students) },
  { students: Object.values(students) },
  { students: Object.values(students) },
  { students: Object.values(students) },
  { students: Object.values(students) },
];

it('renders presence list item with quitter option', async () => {
  const { toJSON, queryByTestId } = render(
    <PresenceList
      agenda={agenda}
      students={students}
      agendaIndex={0}
      name="quitter option"
      testID="presence-list"
      onChange={() => {}}
    />
  );
  fireEvent.press(queryByTestId('presence-list:expand'));

  const lastQuitter = await queryByTestId(
    `presence-list:quitter:${Object.keys(students).length - 1}`
  );
  const quitter0 = await queryByTestId(`presence-list:quitter:0`);

  expect(lastQuitter).not.toBeNull();
  expect(quitter0).not.toBeNull();
  expect(toJSON()).toMatchSnapshot();
});

it('renders presence list item WITHOUT quitter option', async () => {
  const { toJSON, queryByTestId } = render(
    <PresenceList
      agenda={agenda}
      students={students}
      agendaIndex={2}
      name="quitter option"
      testID="presence-list"
      onChange={() => {}}
    />
  );
  fireEvent.press(queryByTestId('presence-list:expand'));

  expect(await queryByTestId(`presence-list:quitter:0`)).toBeNull();
  expect(toJSON()).toMatchSnapshot();
});
