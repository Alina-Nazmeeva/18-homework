import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import LockImage from "../img/padlock.png";

const FormWrapper = styled.div`
    max-width: 400px;
    background-color: #121212;
    padding: 60px;
    margin: auto;
    color: #FDFDFD;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const Icon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f48fb2;
    background-image: url(${LockImage});
    background-size: 50%;
    background-position: 54% 44%;
    background-repeat: no-repeat;
`;

const Input = styled.input`
    border-radius: 3px;
    width: 100%;
    margin: 10px 0px;
    font-weight: 600;
`;

const TextInput = styled(Input)`
    background-color: #121212;
    border: 1px solid #474747;
    padding: 13px 10px;
    font-size: 12px;
    color: #979797;
    box-sizing: border-box;
`;

const ButtonInput = styled(Input)`
    background-color: #90CAF9;
    border: none; 
    padding: 8px 0px;
    font-size: 11px;
    outline: none; 
    cursor: pointer;
`;

const LinkWrapper = styled.div`
    width: 100%;
    font-size: 11px;
    color: #90CAF9;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const LinkContent = styled.a`
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
`;

const Footer = styled.p`
    color: #979797;
    font-size: 11px;
`;

export default function Form({title, checkboxText, linkContent}){
    return(
        <FormWrapper>
            <Icon></Icon>
            <p>{title}</p>
            <TextInput type="text" placeholder="Email Address*"/>
            <TextInput type="text" placeholder="Password*"/>
            <Checkbox text={checkboxText} />
            <ButtonInput type="button" value={title.toUpperCase()} />
            <LinkWrapper>
                <LinkContent>{linkContent}</LinkContent>
                <LinkContent>Don't have an account? Sign Up</LinkContent>
            </LinkWrapper>
            <Footer>Copyright © Your website 2020</Footer>
        </FormWrapper>
    )
}