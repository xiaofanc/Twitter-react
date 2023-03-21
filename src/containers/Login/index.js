import './index.css';
import { useState } from'react';

const Login = () => {
    const [name, setName] = useState(''); // hooks
    const [password, setPassword] = useState('');

    const clickHandler = () => {
        alert("success: " + name + "," + password);
    }
    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangePwd = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div className="login">
            <div>username: <input onChange={onChangeName}/></div>
            <div>password: <input type = "password" onChange={onChangePwd} /></div>
            <div><button onClick={clickHandler}>log in</button></div>
        </div>
    );
}

export default Login;
