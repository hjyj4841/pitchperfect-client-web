import React, { useState } from "react";
import styled from "styled-components";
import { User } from "../../types";
import { loginUser } from "../../api/user.ts";

const StyledLogin = styled.div`
        form {
            width: 300px;
            display: flex;
            flex-direction: column;
        }
    `;

const Login = () => {
    const [user, setUser] = useState<User>({
        userId: '',
        userPassword: '',
        userName: '',
        userProfileImage: '',
        userIntroduce: ''
    });

    const login = () => {
        loginUser(user);
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
                <button type="button" onClick={login}>로그인</button>
            </form>
        </StyledLogin>
    )
}

export default Login;