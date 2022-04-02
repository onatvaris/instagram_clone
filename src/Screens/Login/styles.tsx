import { StyleSheet } from 'react-native';
import GenerateStyle from '../../Utils/generateStyle';
const { width } = GenerateStyle.screenSize;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    height: 50,
    color: '#000',
    paddingHorizontal: 15,
    flex: 1
  },
  viewStyle: {
    backgroundColor: '#fafafa',
    width: width * 0.8,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    marginVertical: 5
  },
  iconStyle: {
    padding: 7
  },
  image: {
    marginVertical: 40,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#3797EF',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },
});
