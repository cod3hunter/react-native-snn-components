import * as React from 'react';

import { View } from 'react-native';
import {
  ThemeProvider,
  light,
  PresenceList,
} from 'react-native-snn-components';

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

export default function App() {
  return (
    <ThemeProvider value={light}>
      <View>
        <PresenceList
          {...{ agenda, students }}
          agendaIndex={0}
          name="teste"
          agenda={agenda}
          students={students}
          onChange={() => {}}
        />
        <PresenceList
          {...{ agenda, students }}
          agendaIndex={1}
          name="teste"
          agenda={agenda}
          students={students}
          onChange={() => {}}
        />
        <PresenceList
          {...{ agenda, students }}
          agendaIndex={2}
          name="teste"
          agenda={agenda}
          students={students}
          onChange={() => {}}
        />
        <PresenceList
          {...{ agenda, students }}
          agendaIndex={3}
          name="teste"
          agenda={agenda}
          students={students}
          onChange={() => {}}
        />
        <PresenceList
          {...{ agenda, students }}
          agendaIndex={4}
          name="teste"
          agenda={agenda}
          students={students}
          onChange={() => {}}
        />
      </View>
    </ThemeProvider>
  );
}
