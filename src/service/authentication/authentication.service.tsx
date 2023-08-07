import axios, { AxiosError, AxiosResponse } from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_URL = process.env.REACT_APP_ALOG_API_URL;

// 깃허브 로그인창으로 다이렉트 해주는 함수
export const GitHubLoginRequestHandler = () => {
    // TODO: GitHub로부터 사용자 인증을 위해 GitHub로 이동해야 합니다. 적절한 URL을 입력하세요.
    // OAuth 인증이 완료되면 authorization code와 함께 callback url로 리디렉션 합니다.
    return window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`);
    //로그인 요청을 보내면 github auth server에서 redirect 로 callback, 그리고 auth code를 전달
};

// EMAIL

export const PostVerifyEmail = (email: string, code: string) => {
    const verifyData = {
        email: email,
        code: code,
    };
    console.log(verifyData);
    const signUpResult: Promise<AxiosResponse> = axios
        .post(`${API_URL}/api/users/emails/verify`, verifyData)
        .then((res: AxiosResponse) => {
            return res;
        })
        .catch((err: AxiosError) => {
            throw err;
        });
    return signUpResult;
};

export const PostSendVerifyEmail = (email: string) => {
    const emailString = email.replace("@", "%40");
    const sendResult: Promise<AxiosResponse> = axios
        .post(`${API_URL}/api/users/emails/send?EmailTo=${emailString}`)
        .then((res: AxiosResponse) => {
            return res;
        })
        .catch((err: AxiosError) => {
            throw err;
        });
    return sendResult;
};

// USER AUTH

export const UsersSignup = (email: string, userPw: string, userNN: string) => {
    const SignUpData = {
        userPw: userPw,
        userNN: userNN,
        email: email,
    };
    const signUpResult: Promise<AxiosResponse> = axios
        // .post(`${API_URL}/api/users/signup`, SignUpData)
        .post(`${API_URL}/api/users/permit-all/signup`, SignUpData)
        .then((res: AxiosResponse) => {
            return res;
        })
        .catch((err: AxiosError) => {
            throw err;
        });
    return signUpResult;
};

export const UsersLogin = (userEmail: string, userPassword: string): Promise<AxiosResponse> => {
    const loginData = {
        userEmail: userEmail,
        userPw: userPassword,
    };

    const loginResult: Promise<AxiosResponse> = axios
        .post(`${API_URL}/auth/permit-all/login`, loginData)
        .then((res: AxiosResponse) => {
            return res;
        })
        .catch((err: AxiosError) => {
            throw err;
        });
    return loginResult;
};

export const UsersInfo = () => {
    return null;
};

export const UsersCheckDuplicate = (userNN: string) => {
    const checkDupResult: Promise<AxiosResponse> = axios
        .get(`${API_URL}/api/users/duplicated/${userNN}`)
        .then((res: AxiosResponse) => {
            return res;
        })
        .catch((err: AxiosError) => {
            throw err;
        });
    return checkDupResult;
};

export const UsersDelete = () => {
    return null;
};
