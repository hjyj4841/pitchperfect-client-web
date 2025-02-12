export interface User{
    userId: string,
    userPassword: string,
    userName: string,
    userProfileImage: string,
    userIntroduce: string
};

export interface Auth {
    token: string | null;
    login: (data: string) => void;
    logout: () => void;
}