import React, { useState, useCallback } from 'react';
import { LayoutAnimation, Text, TouchableOpacity, View } from 'react-native';
import Styles from './presence-list.styles';
import { Icon } from '../icon';
import { useTheme } from '../../hooks/theme';

const isQuitter = (val: string) => val === 'D' || String(val) === '3';
const isPresence = (val: string) => val === 'P' || String(val) === '1';
const isAbscence = (val: string) => val === 'F' || String(val) === '2';

export type PresenceProps = {
  name: string;
  students: {
    [key: string | number]: any;
  };
  agenda: {
    students: {
      [key: string | number]: any;
    };
  }[];
  onChange: (student: number | string, value: string) => void;
  agendaIndex: number;
  testID?: string;
};

export const PresenceList = ({
  name,
  students,
  onChange,
  agenda,
  agendaIndex,
  testID = 'presence-list',
}: PresenceProps) => {
  const [expanded, setExpanded] = useState(false);

  const [styles, theme] = useTheme<ReturnType<typeof Styles>>(Styles);

  const toggleExpandCallback = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }, [expanded]);

  const onSelectPresence = useCallback(
    (student: any, value: any) => () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      onChange(student, value);
    },
    [onChange]
  );

  const disableParticipant = (studentId: string | number) => {
    if (agendaIndex === 0) {
      return false;
    }
    return (
      isQuitter(students[studentId].value) &&
      isQuitter(agenda[agendaIndex - 1]?.students?.[studentId]?.value)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headContainer}
        onPress={toggleExpandCallback}
        testID={`${testID}:expand`}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{name}</Text>
        </View>

        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={theme.sizes.arrow}
          color={theme.colors.secondary.medium}
        />
      </TouchableOpacity>
      {expanded && (
        <View>
          {Object.keys(students).map((studentId, idx) => (
            <View style={styles.infosContainer} key={studentId}>
              <View>
                <Text style={styles.infoText}>{students[studentId].name} </Text>
              </View>
              <View style={styles.presenceIconsContainer}>
                <Text style={styles.infoText}>Presença: </Text>
                {isQuitter(students[studentId].value) && agendaIndex !== 0 ? (
                  <Text style={styles.desistenteText}>Desistente</Text>
                ) : (
                  <>
                    <TouchableOpacity
                      disabled={disableParticipant(studentId)}
                      style={styles.headContainer}
                      onPress={onSelectPresence(studentId, 'P')}
                      testID={`${testID}:presence:${idx}`}
                    >
                      <Icon
                        name={
                          isPresence(students[studentId].value)
                            ? 'check-circle'
                            : 'circle'
                        }
                        size={theme.sizes.font24}
                        color={theme.colors.attention.success}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      disabled={disableParticipant(studentId)}
                      style={styles.headContainer}
                      onPress={onSelectPresence(studentId, 'F')}
                      testID={`${testID}:abscence:${idx}`}
                    >
                      <Icon
                        name={
                          isAbscence(students[studentId].value)
                            ? 'check-circle'
                            : 'circle'
                        }
                        size={theme.sizes.font24}
                        color={theme.colors.attention.danger}
                      />
                    </TouchableOpacity>
                    {agendaIndex === 0 && (
                      <TouchableOpacity
                        disabled={disableParticipant(studentId)}
                        style={styles.headContainer}
                        onPress={onSelectPresence(studentId, 'D')}
                        testID={`${testID}:quitter:${idx}`}
                      >
                        <Icon
                          name={
                            isQuitter(students[studentId].value)
                              ? 'check-circle'
                              : 'circle'
                          }
                          size={theme.sizes.font24}
                          color={theme.colors.background.high}
                        />
                      </TouchableOpacity>
                    )}
                  </>
                )}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
