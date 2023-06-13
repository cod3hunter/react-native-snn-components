import { StyleSheet } from 'react-native';
import type { theme } from '../../theme/theme';

export default (theme: theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: theme.colors.background.low,
      borderRadius: 10,
      marginBottom: 8,
    },
    headContainer: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    titleContainer: {
      flex: 2,
    },
    titleText: {
      color: theme.colors.background.contentOfMedium,
      fontSize: theme.sizes.description,
      fontWeight: 'bold',
    },
    presenceIconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infosContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    infoText: {
      fontSize: theme.sizes.info,
      color: theme.colors.background.contentOfMedium,
      fontWeight: 'bold',
    },
    desistenteText: {
      fontSize: theme.sizes.info,
      color: theme.colors.attention.danger,
      fontWeight: 'bold',
      paddingLeft: 16,
    },
  });
