import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

 const Jsxstyled = styled.div`

    background-color: aqua;
    padding:2em;
    
    #form{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
 `


const Form = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    const validateUsername = (event) => {
        setUsername(event.target.value);
    }

    const validatePassword = (event) => {
        setPassword(event.target.value);
    }

    const getStatus = () => {
        if(password.length < 5 || username.length < 5){
            return false;
        }
        return true;
    }

    const buttonValidation = () => {
        if(password.length < 5 || username.length < 5){
            alert("invalid credentials")
        }
    }

    return(

    <Jsxstyled>
        <form id='form'>
            <label>Enter your Email:
                <input id='name' type="text" value={username} onChange={validateUsername}/>
                
            </label>

            <label>Enter your password:
                <input id='password' type="password" value={password} onChange={validatePassword}/>
            
            </label> <br/> <br/>
            <Button click={buttonValidation} success={getStatus()}/>
        </form>

       
       
      </Jsxstyled>
    )
}

export default Form;