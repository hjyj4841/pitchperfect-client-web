import React, { useState } from "react";
import styled from "styled-components";
import { User } from "../../types";
import { loginUser } from "../../api/user.ts";
import { useAuth } from "../../contexts/AuthContext.tsx";

const StyledLogin = styled.div`
    padding-top: 50px;
        form {
            width: 300px;
            display: flex;
            flex-direction: column;
        }
    `;

const Login = () => {
    const { login } = useAuth();

    const [user, setUser] = useState<User>({
        userId: '',
        userPassword: '',
        userName: '',
        userProfileImage: '',
        userIntroduce: ''
    });

    const getToken = async () => {
        const token:string = await loginUser(user);
        if(token !== null) login(token);
        window.location.href = '/';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <StyledLogin>
            <form>
                <input type="text" name="userId" placeholder="아이디"
                    value={user.userId}
                    onChange={handleInputChange}
                />
                <input type="password" name="userPassword" placeholder="비밀번호"
                    value={user.userPassword} 
                    onChange={handleInputChange}
                />
                <button type="button" onClick={getToken}>로그인</button>
            </form>
        </StyledLogin>
    )
}

export default Login;