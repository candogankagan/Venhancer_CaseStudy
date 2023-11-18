import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  icon: {
    height: 20,
    width: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  addButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#b32d24',
    borderRadius: 8,
  },
  addButtonTextContainer: {
    color: '#fff',
  },
  name: {
    fontSize: 18,
  },
});
