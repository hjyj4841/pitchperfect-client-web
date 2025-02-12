import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
    display: flex;
    flex-direction: row;
    div{
        flex: 1;
        border: 1px solid black;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(1){
        flex: 1;
    }
`;

const Main = () => {
    return (
        <MainStyled>
            <div>최근 발매 앨범 조회</div>
            <div>앨범 검색</div>
            <div>최고 평점 앨범</div>
        </MainStyled>
        
    );
}

export default Main;