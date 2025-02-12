import React from "react";
import { useAuth } from "../contexts/AuthContext.tsx";
import styled from "styled-components";

const HeaderStyled = styled.div`
    position: fixed;
    width: 100vw;

    display: flex;
    justify-content: flex-end;
    
    background-color: white;
    right: 0;

    ul{
        display: flex;
        li{
            padding: 20px 20px;
        }
    }
`;

const Header = () => {
    const { token, logout } = useAuth();

    return (
        <HeaderStyled>
            <ul>
                <li><a href="/">메인페이지</a></li>
                {token === null ? (
                    <>
                        <li><a href="/login">sign in</a></li>
                        <li><a href="/">sign up</a></li>
                    </>
                ) : (
                    <li><button onClick={ logout }>logout</button></li>
                )}
                
            </ul>
        </HeaderStyled>
    );
};

export default Header;