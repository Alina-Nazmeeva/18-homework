import styled from "styled-components";
import LockImage from "../img/padlock.png";
import {Link} from "react-router-dom";

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

const NameInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    border-radius: 3px;
    width: ${(props) => (props.nameInput ? "48%" : "100%")};
    margin: 10px 0px;
    font-weight: 600;
    outline: none;
`;

const TextInput = styled(Input)`
    background-color: #121212;
    border: 1px solid #474747;
    padding: 13px 10px;
    font-size: 12px;
    color: #979797;
    box-sizing: border-box;
`;

const SubmitInput = styled(Input)`
    background-color: #90CAF9;
    border: none; 
    padding: 8px 0px;
    font-size: 11px; 
    cursor: pointer;
`;

const LinkWrapper = styled.div`
    width: 100%;
    font-size: 11px;
    display: flex;
    justify-content: ${(props) => (props.signIn ? "space-between" : "flex-end")};
    margin-bottom: 30px;
`;

const LinkContent = styled(Link)`
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: #90CAF9;
`;

const Footer = styled.p`
    color: #979797;
    font-size: 11px;
    margin-block-end: 0em;
`;

export {FormWrapper, Icon, NameInputWrapper, TextInput, SubmitInput, LinkWrapper, LinkContent, Footer};