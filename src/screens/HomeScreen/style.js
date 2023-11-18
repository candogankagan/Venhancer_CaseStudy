import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: '15%',
    marginBottom: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  subButtonContainer: {
    alignSelf: 'flex-start',
    width: 100,
    borderWidth: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#b32d24',
    borderRadius: 5,
  },
  buttonTitle: {
    color: '#fff',
  },
  favText: {
    alignSelf: 'center',
    fontSize: 22,
    marginBottom: 30,
    color: '#b32d24',
    fontWeight: '700',
  },
});
