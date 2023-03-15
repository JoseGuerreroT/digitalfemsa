import {StyleSheet} from 'react-native';

export const pointsCardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#334FFA',
    borderRadius: 20,
    padding: 20,
    minHeight: 143,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: '81%',
  },
  container: {
    alignItems: 'center',
  },
  contentTxt: {
    color: '#fff',
    fontSize: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 14,
    color: '#9B9898',
    marginBottom: 20,
  },
});
