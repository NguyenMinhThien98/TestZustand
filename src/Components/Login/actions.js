import * as actionTypes from './actionTypes';

export const loginRequest = payload => ({
    type: actionTypes.REQUEST_LOGIN,
    data: payload
}); 

export const forgotPassword = payload => ({
    type: actionTypes.FORGOT_PASSWORD,
    data: payload
});

export const resendOtpPassword = payload => ({
    type: actionTypes.RESEND_OTP_FORGOTPASSWORD,
    data: payload
});

export const verifyForgotPassword = payload => ({
    type: actionTypes.VERIFY_FORGOTPASSWORD,
    data: payload
})