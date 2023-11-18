import {Alert} from 'react-native';
import {serviceApi} from '../service';

export default class Requests {
  static genericGet = async (endpoint, config) => {
    const response = await serviceApi.get(endpoint, config).catch(error => {
      console.log('[-] GET Response EP : %s  Error : %s', endpoint, error);
      Alert.alert('Something went wrong');
      return error;
    });
    return response.data.data;
  };

  static genericPost = async (endpoint, data, config) => {
    try {
      const response = await serviceApi.post(endpoint, data, config);
      return response;
    } catch (error) {
      Alert.alert('Something went wrong');
      if (error.response.status === 500) return error;
      return {...error.response.data, status: error.response.status};
    }
  };

  static genericDelete = async (endpoint, config) => {
    const response = await serviceApi.delete(endpoint, config).catch(error => {
      console.log('[-] DELETE Response EP : %s  Error : %s', endpoint, error);
      Alert.alert('Something went wrong');
      return error;
    });
    return response;
  };

  static genericUpdate = async (endpoint, data, config) => {
    const response = await serviceApi
      .put(endpoint, data, config)
      .catch(error => {
        console.log('[-] PUT Response Error : ' + error);
        Alert.alert('Something went wrong');
        return error;
      });

    return response;
  };
}
