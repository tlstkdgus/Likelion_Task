import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AppServer = process.env.REACT_APP_SERVER_URL;

const Container = styled.div`
    width: 600px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    background-color: #008CBA;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #007bb5;
    }
`;

const Input = styled.input`
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
`;

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async (e) => {
        try {
            const response = await axios.post(`${AppServer}/api/user/login`, {
                userId,
                password,
            });
            alert(`로그인 성공, 사용자 고유 아이디: ${response.data}`);
        } catch (error) {
            console.error(error);
            alert(error.response?.data || "로그인에 실패했습니다.");
        }
    };

    return (
        <Container>
            <h2>로그인</h2>
            <Input type="text" placeholder="아이디" value={userId} onChange={e => setUserId(e.target.value)} />
            <Input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>로그인</Button>
        </Container>
    );
};

export default Login;
