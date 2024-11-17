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
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const Input = styled.input`
    display: block;
    margin: 10px 0;
    padding: 8px;
    width: 100%;
`;

const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSignUp = async () => {
        try {
            const response = await axios.post(`${AppServer}/api/user/signup`, {
                userId,
                password,
                email,
            });
            alert('회원가입이 완료되었습니다!');
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.status === 401
            ? "이미 사용 중인 아이디입니다."
            : "회원가입에 실패했습니다."; 
        alert(errorMessage);
        }
    };

    return (
        <Container>
            <h2>회원가입</h2>
            <Input type="text" placeholder="아이디" value={userId} onChange={e => setUserId(e.target.value)} />
            <Input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
            <Input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
            <Button onClick={handleSignUp}>회원가입</Button>
        </Container>
    );
};

export default SignUp;
