import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Third = () => {

    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [nickName, setNickName] = useState('');
    const [signupMsg, setSignupMsg] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginMsg, setLoginMsg] = useState('');
    const [loginToken, setLoginToken] = useState('');

    const [token, setToken] = useState('');
    const [tokenMsg, setTokenMsg] = useState('');
    const [logoutMsg, setLogoutMsg] = useState('');

    const host = 'https://todolist-api.hexschool.io';
    const handleSignup = async () => {
        if (!signupEmail || !signupPassword || !nickName) {
            setSignupMsg("請填寫註冊所有欄位");
        } else {
            const option = {
                "email": signupEmail,
                "password": signupPassword,
                "nickname": nickName
            }
            try {
                const res = await axios.post(`${host}/users/sign_up`, option);
                if (res.data.status === true) {
                    setSignupMsg("註冊成功");
                } else {
                    setSignupMsg("註冊失敗" + res.data.message);
                }
            } catch (err) {
                setSignupMsg("註冊失敗" + err);
            }
        }
    }

    const handleLogin = async () => {
        if (!loginEmail || !loginPassword) {
            setLoginMsg("請填寫登入所有欄位")
        } else {
            const option = {
                "email": loginEmail,
                "password": loginPassword
            }
            try {
                const res = await axios.post(`${host}/users/sign_in`, option);
                if (res.data.status === true) {
                    setLoginMsg("登入成功");
                    setLoginToken(res.data.token);
                } else {
                    setLoginMsg("登入失敗" + res.data.message);
                }
            } catch (err) {
                setLoginMsg("登入失敗" + err);
            }
        }
    }

    const handleCheck = async () => {
        if (!token) {
            setTokenMsg("請填寫Token欄位");
        } else {
            try {
                const res = await axios.get(`${host}/users/checkout`, {
                    headers: {
                        Authorization: token
                    }
                })
                if (res.data.status === true) {
                    setTokenMsg("驗證成功");
                } else {
                    setTokenMsg("驗證失敗" + res.data.message);
                }
            } catch (err) {
                setTokenMsg("驗證失敗" + err);
            }
        }
    }

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${host}/users/sign_out`, {},
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );
            if (res.data.status === true) {
                setLogoutMsg("登出成功")
            } else {
                setLogoutMsg("登出失敗" + res.data.message);
            }
        } catch (error) {
            setLogoutMsg('登出錯誤: ' + error.message);
        }
    }

    return (
        <>
            <div style={{ 'padding': '10px 30px' }}>
                <Link to={'/'}>回到首頁</Link>
            </div>
            <hr />
            <div style={{ 'padding': '30px' }}>
                <h3>註冊</h3>
                <input
                    type="email"
                    placeholder="請輸入E-mail"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                /><br />
                <input
                    type="password"
                    placeholder="請輸入密碼"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                /><br />
                <input
                    type="text"
                    placeholder="請輸入暱稱"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                /><br />
                <button onClick={handleSignup}>註冊</button>
                <div>Message: {signupMsg}</div>
            </div>
            <hr />
            <div style={{ 'padding': '30px' }}>
                <h3>登入</h3>
                <input
                    type="email"
                    placeholder="請輸入E-mail"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                /><br />
                <input
                    type="password"
                    placeholder="請輸入密碼"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                /><br />
                <button onClick={handleLogin}>登入</button>
                <div>Message: {loginMsg}</div>
                <div>{loginToken}</div>
            </div>
            <hr />
            <div style={{ 'padding': '30px' }}>
                <h3>驗證</h3>
                <input
                    type="text"
                    placeholder="Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <br />
                <button onClick={handleCheck}>驗證</button>
                <div>Message: {tokenMsg}</div>
            </div>
            <hr />
            <div style={{ 'padding': '30px' }}>
                <h3>登出</h3>
                <input
                    type="text"
                    placeholder="Token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                />
                <br />
                <button onClick={handleLogout}>登出</button>
                <div>Message: {logoutMsg}</div>
            </div>
        </>
    )
}
export default Third;