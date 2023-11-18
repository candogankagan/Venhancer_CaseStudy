import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  titleCountsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: '10%',
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
  },
  profileButtonContainer: {
    marginTop: 12,
    borderRadius: 6,
    padding: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#0a3b8a',
  },
  profileButtonText: {
    color: '#fff',
  },
  relatedItemTitle: {
    fontWeight: '700',
    marginTop: 15,
    marginVertical: 10,
    fontSize: 18,
    color: '#b32d24',
    marginHorizontal: 20,
  },
  flatlist: {
    paddingHorizontal: 10,
  },
});
