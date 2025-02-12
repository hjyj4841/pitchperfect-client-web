import React from "react";
import { useAuth } from "../contexts/AuthContext.tsx";

const Header = () => {
    const { token, logout } = useAuth();

    return (
        <div>
            <ul>
                <li><a href="/">메인페이지</a></li>
                {token === null ? (
                    <>
                        <li><a href="/login">로그인</a></li>
                        <li>회원가입</li>
                    </>
                ) : (
                    <li><button onClick={ logout }>로그아웃</button></li>
                )}
                
            </ul>
        </div>
    );
};

export default Header;