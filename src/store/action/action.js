import {
  CallApi,
  LOGIN_API,
  OTP_API,
  apiPost,
  setItem,
} from '../../config/Axios';
import {saveUserData} from '../slices/userSlice';
import store from '../store';

export const signUp = (data, EndPoint) => {
  return apiPost(EndPoint, data);

  // return CallApi(data, EndPoint);

  // store.dispatch(saveUserData(data));
};

export const otpVerification = data => {
  return new Promise((resolve, reject) => {
    apiPost(OTP_API, data)
      .then(res => {
        if (res?.success && res?.data?._id) {
          setItem('userData', res.data)
            .then(returndata => {
              store.dispatch(saveUserData(res.data));
              resolve(res);
            })
            .catch(e => {
              resolve(e);
            });
        }
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

// Login Action

export const Login = async data => {
  try {
    return apiPost(LOGIN_API, data);
  } catch (error) {
    console.log(error);
  }
};
