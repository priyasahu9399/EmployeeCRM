// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {RNToasty} from 'react-native-toasty';
// import http from './../../services/api';
// import {AUTH_TOKEN, LOADING, FORGET_OTP} from './../types';
// import {GetUserByIdApi} from './homeActions';

// export const AuthFunction = () => dispatch => {
//   dispatch({
//     type: AUTH_TOKEN,
//     payload: 's',
//   });
// };

// export const SignUpApi = (postData, navigation) => dispatch => {
//   http
//     .post('singUp', postData)
//     .then(async response => {
//       if (response.data.sucess) {
//         navigation.navigate('ScreenOTPbox', {
//           id: response.data.data._id,
//           otp: response.data.data.otp,
//         });
//         RNToasty.Success({
//           title: response.data.message,
//         });
//       } else {
//         RNToasty.Info({
//           title: response.data.message,
//         });
//       }
//     })
//     .catch(error => {
//       RNToasty.Error({
//         title: error.response.data.message,
//       });
//     });
// };

// export const LoginApi = (post, navigation) => dispatch => {
//   dispatch({
//     type: LOADING,
//     payload: true,
//   });
//   http
//     .post('logIn', post)
//     .then(async response => {
//       console.log('response.data.data._id', response.data.data.otp);
//       if (response.data.success) {
//         if (response.data.data.otpVerify == true) {
//           dispatch({
//             type: AUTH_TOKEN,
//             payload: response.data.token,
//           });
//           await AsyncStorage.setItem('@USER_ID', response.data.data._id);
//           await AsyncStorage.setItem('@USER_TOKEN', response.data.token);

//           dispatch({
//             type: LOADING,
//             payload: false,
//           });
//         } else {
//           navigation.navigate('ScreenOTPbox', {
//             id: response.data.data._id,
//             otp: response.data.data.otp,
//           });
//         }
//         RNToasty.Success({
//           title: response.data.message,
//         });
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       } else {
//         RNToasty.Info({
//           title: response.data.message,
//         });
//         dispatch({
//           type: LOADING,
//           payload: false,
//         });
//       }
//     })
//     .catch(error => {
//       RNToasty.Error({
//         title: error.response.data.message,
//       });
//     });
// };

// export const OTPApi = (postData, navigation, id) => dispatch => {
//   http
//     .post(`otpVerify/${id}`, postData)
//     .then(async response => {
//       if (response.data.sucess) {
//         dispatch({
//           type: AUTH_TOKEN,
//           payload: response.data.token,
//         });
//         await AsyncStorage.setItem('@USER_ID', response.data.data._id);
//         await AsyncStorage.setItem('@USER_TOKEN', response.data.token);
//         RNToasty.Success({
//           title: response.data.message,
//         });
//       } else {
//         RNToasty.Info({
//           title: response.data.message,
//         });
//       }
//     })
//     .catch(error => {
//       RNToasty.Error({
//         title: error.response.data.message,
//       });
//     });
// };

// export const LogoutApi = () => dispatch => {
//   dispatch({
//     type: AUTH_TOKEN,
//     payload: null,
//   });
//   AsyncStorage.removeItem('@USER_TOKEN');
//   AsyncStorage.removeItem('@USER_ID');
//   RNToasty.Normal({
//     title: 'LogOut Successful',
//   });
// };

// export const forgetPassWordOtpVerifyApi =
//   (postData, navigation) => dispatch => {
//     http
//       .post(`forgetPassWordOtpVerify`, postData)
//       .then(async response => {
//         if (response.data.sucess) {
//           dispatch({
//             type: FORGET_OTP,
//             payload: response.data.data.otp,
//           });

//           navigation.navigate('ForgetOtpVerify', {mobile: postData.mobile});
//           RNToasty.Success({
//             title: response.data.message,
//           });
//         } else {
//           RNToasty.Info({
//             title: response.data.message,
//           });
//         }
//       })
//       .catch(error => {
//         RNToasty.Error({
//           title: error.response.data.message,
//         });
//       });
//   };

// export const forgetPassWordApi = (postData, navigation) => dispatch => {
//   http
//     .put(`forgetPassWord`, postData)
//     .then(async response => {
//       if (response.data.success) {
//         navigation.navigate('Login');
//         RNToasty.Success({
//           title: response.data.message,
//         });
//       } else {
//         RNToasty.Info({
//           title: response.data.message,
//         });
//       }
//     })
//     .catch(error => {
//       RNToasty.Error({
//         title: error.response.data.message,
//       });
//     });
// };

// export const UpdateUserApi = (postData, navigation) => async dispatch => {
//   const userId = await AsyncStorage.getItem('@USER_ID'); //profile update
//   // console.log(userId);
//   console.log('update user data : ', postData);
//   http
//     .put(`updateUser/${userId}`, postData, {
//       enctype: 'multipart/form-data',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         'Content-Disposition': 'form-data',
//       },
//     })
//     .then(async response => {
//       // console.log("response update user : ", response.data.data)
//       if (response.data.success) {
//         dispatch(GetUserByIdApi());
//         RNToasty.Success({
//           title: response.data.message,
//         });
//         navigation?.goBack();
//       } else {
//         RNToasty.Info({
//           title: response.data.message,
//         });
//       }
//     })
//     .catch(error => {
//       // console.log('Image is require');
//       RNToasty.Error({
//         title: error.response.data.message,
//       });
//     });
// };
