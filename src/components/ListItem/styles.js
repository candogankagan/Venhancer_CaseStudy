import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    height: 180,
  },
  image: {
    width: '35%',
    height: '100%',
    alignSelf: 'center',
    marginRight: 10,
  },
  textContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    color: '#b32d24',
  },
  nameDescriptionText: {flex: 1, flexWrap: 'wrap'},
});
